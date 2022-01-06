import { Component, Input, OnInit } from '@angular/core';
import { PlantsService } from './plants.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-plants',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  dinheiro: number = 500;
  estagio: number = 0;
  teste: number = 0;
  fator_colheita: number = 10;
  valor_upcolher: number = 80;
  valor_upjuros: number = 80;
  ms: number = 500;
  ganho_ps: number = 0;

  ngOnInit(): void {
    this.count();
  }

  count(){
    const obs$ = interval(this.ms)
    this.ganho_ps = 1000/this.ms;  
    obs$.subscribe((d) => {
      this.dinheiro += 1;
    })
  }

  regar() {
    if (this.estagio < 5)
      this.estagio += 1;
  }

  colher() {
    if (this.estagio == 5) {
      this.estagio = 0;
      this.dinheiro += this.fator_colheita;
    }
  }

  upColher(){
    if (this.dinheiro > this.valor_upcolher){
      this.fator_colheita = this.fator_colheita*2;
      this.dinheiro -= this.valor_upcolher;
      this.valor_upcolher = this.valor_upcolher * 2,5;
    }
  }

  upJuros(){
    if (this.dinheiro > this.valor_upjuros && this.ms > 1){
      this.ms = this.ms/1.6;
      this.dinheiro -= this.valor_upjuros;
      this.valor_upjuros = this.valor_upjuros * 2,5;
      this.ganho_ps = 1000/this.ms;  
      console.log(this.ganho_ps)
      console.log(this.ms)
      this.count();
    }
  }

}
