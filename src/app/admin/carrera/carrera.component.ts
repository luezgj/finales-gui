import { Component, OnInit, EventEmitter } from '@angular/core';
import { Carrera } from '../../model/carrera';
import { CarreraService } from '../../services/carrera.service';
import { CarreraFormComponent } from './carrera-form/carrera-form.component';


@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.scss']
})
export class CarreraComponent implements OnInit {
  carreras: Carrera[];
  selectedCarrera: String;

  constructor(
    private carreraService: CarreraService
  ) {}

  ngOnInit() {
    this.getAll()
  }

  getAll() : void{
    this.carreraService.getCarreras().subscribe(carreras => this.carreras = carreras);
  }

  carreraAdded(carrera : Carrera): void{
    console.log('carrera agregada');
    console.log(carrera);
    this.carreras.push(carrera);
  }

  carreraUpdated(carrera : Carrera): void{
    console.log("Carrera modificada");
    console.log(carrera);
    this.carreras[this.carreras.findIndex(c => c.nombre == carrera.nombre)] = carrera;
    this.selectedCarrera='';
  }

  updateCarrera(carrera : Carrera): void {
    this.selectedCarrera=carrera.nombre;
  }

  delCarrera(deletingCarrera : Carrera,index :number): void {
    this.carreraService.deleteCarrera(deletingCarrera.nombre).subscribe(msg=>{console.log(msg);this.carreras.splice(index,1);});
  }
}