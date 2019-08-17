import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Mesa } from '../../../model/mesa';
import { MesaService } from '../../../services/mesa.service';

@Component({
  selector: 'app-mesa-form',
  templateUrl: './mesa-form.component.html',
  styleUrls: ['./mesa-form.component.scss']
})
export class MesaFormComponent implements OnInit {

	@Input() mesa: Mesa;
  @Output() add: EventEmitter<Mesa> = new EventEmitter();
  isEdit: boolean;
  error: boolean;
  submitting: boolean;
  submitBtnText: string;

  newMesa: Mesa;

  constructor(private mesaService: MesaService) { }

  ngOnInit() {
  	this.isEdit = !!this.mesa;
    this.submitBtnText = this.isEdit ? 'Modificar mesa' : 'Crear mesa';

    this.newMesa = this._setNewMesa();
  }

  private _setNewMesa() {
    if (!this.isEdit) {
      return new Mesa(null, null, null);
    } else {
      return new Mesa(
        this.mesa.nombre,
        this.mesa.fechaDesde,
        this.mesa.fechaHasta
      );
    }
  }

  send(){
    if (!this.isEdit) {
      this.mesaService.addMesa(this.newMesa)
        .subscribe(mesa => {
          console.log('Mesa agregada'+ mesa.nombre+"-Desde:"+mesa.fechaDesde+"-Hasta:"+mesa.fechaHasta);
          this.add.emit(mesa);
        });
    } else {
      //NO SE PUEDE MODIFICAR UNA MESA PERO IGUAL DEJO EL CÓDIGO
      //this.mesaService.modifyMesa(this.newMesa).subscribe(message => console.log(message));
    }
  }

}
