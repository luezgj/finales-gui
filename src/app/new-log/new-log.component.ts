import { Component, OnInit, ViewChild } from '@angular/core';
import { MesasComponent } from '../mesas/mesas.component';
import { UserCarrerasComponent } from '../user-carreras/user-carreras.component';
import { Log } from '../model/log';
import { TokenStorageService } from '../auth/token-storage.service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.scss']
})
export class NewLogComponent implements OnInit {
  @ViewChild(MesasComponent/*, {static: false}*/)
  private mesas: MesasComponent;

  @ViewChild(UserCarrerasComponent/*, {static: false}*/)
  private carreras: UserCarrerasComponent;

  constructor(private tokenService: TokenStorageService, private logService: LogService) { }

  ngOnInit() {
  }

  generateLog() : void {
    let newLog = new Log(this.tokenService.getUsername(), this.mesas.selectedMesa.nombre, this.carreras.materias.selectedMateria, this.carreras.selectedCarrera.nombre,
                    'Pendiente', new Date());
    this.logService.createLog(newLog).subscribe(log => console.log("Log creado"+log));
  }

}
