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
  selectedCarreras: boolean[]= [];

  constructor(
    private carreraService: CarreraService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.getCarreras()
  }

  getCarreras() : void {
    this.carreraService.getCarreras().subscribe(carreras => {
      this.carreras = carreras;
      this.selectedCarreras.fill(false,0,carreras.length-1);
      this.getUserCarreras();
    });
  }

  getUserCarreras(): void {
    this.carreraService.getUserCarreras().subscribe(userCarreras=> {
      console.log("Carreras del usuario traidas");
      for(var i=0; i<userCarreras.length ; i++){
        var carreraIndex: number=-1;
        for(var j=0;j<this.carreras.length;j++){
          if(userCarreras[i].nombre==this.carreras[j].nombre){
            carreraIndex=j;
            break;
          }
        }
        this.selectedCarreras[carreraIndex]=true;
      }
    });
  }

  selectedCarreraEvent(c : Carrera, indice: number): void {
    this.carrerasAnotadas.push(c);
    this.selectedCarreras[indice]= true;
  }

  deleteCarreraEvent(c : Carrera, indice: number): void {
    this.carrerasAnotadas.splice( this.carrerasAnotadas.indexOf(c), 1 );
    this.selectedCarreras[indice]= false;
  }

  setCarreras() : void {
    this.usuarioService.setCarreras(this.carrerasAnotadas).subscribe(user => console.log(user));
  }
}
