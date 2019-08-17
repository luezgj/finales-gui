import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Mesa } from '../model/mesa';
import { MesaService } from '../services/mesa.service';
import { Carrera } from '../model/carrera';
import { CarreraService } from '../services/carrera.service';
import { InscrMateriasComponent } from '../inscr-materias/inscr-materias.component';

@Component({
  selector: 'app-user-carreras',
  templateUrl: './user-carreras.component.html',
  styleUrls: ['./user-carreras.component.scss']
})
export class UserCarrerasComponent implements OnInit {
  carreras: Carrera[];
  selectedCarrera: Carrera;

  @ViewChild(InscrMateriasComponent)
  public materias: InscrMateriasComponent;
  
  constructor(
    private carreraService: CarreraService,
    private ruta : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.getUserCarreras()
  }

  getUserCarreras() : void {
    this.carreraService.getUserCarreras().subscribe(carreras => this.carreras=carreras);
  }

  setCarrera(newSelectedCarrera: Carrera): void {
    this.selectedCarrera=newSelectedCarrera;
  }

}