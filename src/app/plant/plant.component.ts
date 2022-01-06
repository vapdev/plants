import { Component, OnInit } from '@angular/core';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantComponent implements OnInit {

  estagio: number;
  dinheiro: number;

  constructor(private plantsService: PlantsService) {
    //this.estagio = this.plantsService.getEstagio()
    this.estagio = 0;
    this.dinheiro = 0;
  }

  ngOnInit(): void {
  }

  regar() {
    if (this.estagio < 5)
      this.estagio += 1;
  }

  colher() {
    if (this.estagio == 5) {
      this.estagio = 0;
      this.dinheiro += 10;
    }
  }

}
