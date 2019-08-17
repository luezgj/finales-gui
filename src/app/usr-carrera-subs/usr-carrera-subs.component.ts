import { Component, OnInit } from '@angular/core';
import { Carrera } from '../model/carrera';
import { CarreraService } from '../services/carrera.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usr-carrera-subs',
  templateUrl: './usr-carrera-subs.component.html',
  styleUrls: ['./usr-carrera-subs.component.scss']
})
export class UsrCarreraSubsComponent implements OnInit {
  carreras: Carrera[];
  carrerasAnotadas: Carrera[]= [];

  constructor(
    private carreraService: CarreraService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.getCarreras()
  }

  getCarreras() : void {
    this.carreraService.getCarreras().subscribe(carreras => this.carreras = carreras);
  }

  setCarreras() : void {
    this.usuarioService.setCarreras(this.carrerasAnotadas).subscribe(user => console.log(user));
  }

  selectedCarreraEvent(c : Carrera): void {
    this.carrerasAnotadas.push(c);
  }
}
