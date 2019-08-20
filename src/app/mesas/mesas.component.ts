import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Mesa } from '../model/mesa';
import { MesaService } from '../services/mesa.service';
import { TokenStorageService } from '../auth/token-storage.service'

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {
  mesas: Mesa[];
  selectedMesa: Mesa;
  areSelectedMesa: boolean=false;
  isInMesaAdmin: boolean= false;

  @Input() set add(evento : EventEmitter<Mesa>){
    this.isInMesaAdmin = true;
    evento.subscribe(mesa => this.mesaAdded(mesa));
  }

  constructor(private mesaService: MesaService, private token: TokenStorageService) { }

  ngOnInit() {
    this.getMesas()
  }

  getMesas() : void {
    this.mesaService.getMesas().subscribe(mesas => this.mesas = mesas);
  }

  selectMesa(addLogMesa: Mesa): void {
    this.selectedMesa=addLogMesa;
    this.areSelectedMesa=true;
  }

  mesaAdded(mesa: Mesa): void {
    this.mesas.push(mesa);
  }

}
