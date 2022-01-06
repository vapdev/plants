import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantComponent } from './plants.component';

describe('PlantComponent', () => {
  let component: PlantComponent;
  let fixture: ComponentFixture<PlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});