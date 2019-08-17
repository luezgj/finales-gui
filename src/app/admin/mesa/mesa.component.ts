import { Component, OnInit, EventEmitter } from '@angular/core';

import { MesaFormComponent } from './mesa-form/mesa-form.component';
import { MesasComponent } from '../../mesas/mesas.component';
import { Mesa } from '../../model/mesa'

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {
  evento : EventEmitter<Mesa>= new EventEmitter<Mesa>();

  constructor() { }

  ngOnInit() {
  }

  mesaAdded(mesa : Mesa): void {
    this.evento.emit(mesa);
  }

}
