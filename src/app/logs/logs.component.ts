import { Component, OnInit } from '@angular/core';
import { Log } from '../model/log';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selection : string[]= [];
  editingLog: number= -1;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getLogs();
  }

  getLogs() : void {
    this.logService.getUserLogs()
      .subscribe(
        logs => {this.logs = logs;
        logs.forEach(elemento=> this.selection.push(elemento.estado));
      });
  }

  delete(log : Log, index : number) : void {
    this.logService.deleteLog(log.id).subscribe(message=> {this.logs.splice(index,1); this.selection.splice(index,1)});
  }

  modify(log : Log, index : number) : void{
    console.log("modifing"+index);
    this.editingLog=index;
    console.log("editing"+this.editingLog);
  }

  conformModify(log : Log, index : number) : void{
    console.log("modifing "+index);
    log.estado=this.selection[index];
    this.logService.modifyLog(log).subscribe(modifiedLog=> {
        this.logs[index] = modifiedLog;
        this.editingLog=-1;
      });
  }

}
