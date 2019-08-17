import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Log }         from '../model/log';
import { LogService }  from '../services/log.service';

@Component({
  selector: 'app-detalle-log',
  templateUrl: './detalle-log.component.html',
  styleUrls: ['./detalle-log.component.scss']
})
export class DetalleLogComponent implements OnInit {
  @Input() log: Log;

  constructor(
    private ruta : ActivatedRoute,
    private logService : LogService,
    private location : Location
  ) { }

  ngOnInit(): void {
  	this.getLog();
  }

  getLog(): void {
    const id = +this.ruta.snapshot.paramMap.get('id');
    this.logService.getLog(id)
      .subscribe(log => this.log = log);
  }

  goBack(): void {
    this.location.back();
  }

}
