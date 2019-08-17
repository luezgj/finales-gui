import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Mesa } from '../model/mesa';
import { Message } from '../message';
import { AppComponent } from '../app.component'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MesaService {

	private baseUrl = AppComponent.baseURL;

  constructor(private http: HttpClient) { }

  addMesa(newMesa : Mesa): Observable<Mesa>{
  	return this.http.post<Mesa>(this.baseUrl+"/mesa", newMesa,httpOptions);
  }

  getMesas(): Observable<Mesa[]>{
  	return this.http.get<Mesa[]>(this.baseUrl+"/mesa", httpOptions);
  }

  getMesa(nombre : String): Observable<Mesa>{
    return this.http.get<Mesa>(this.baseUrl+"/mesa/"+nombre, httpOptions);
  }

}
