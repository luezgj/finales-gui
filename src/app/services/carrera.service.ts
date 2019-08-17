import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Carrera } from '../model/carrera';
import { Message } from '../message';
import { AppComponent } from '../app.component'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CarreraService {

	private baseUrl = AppComponent.baseURL;

  constructor(private http: HttpClient) { }

  addCarrera(newCarrera : Carrera): Observable<Carrera>{
  	return this.http.post<Carrera>(this.baseUrl+"/carrera", newCarrera, httpOptions);
  }

  getCarreras(): Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.baseUrl+"/carrera", httpOptions);
  }

  getCarrera(nombre : String): Observable<Carrera>{
    return this.http.get<Carrera>(this.baseUrl+"/carrera/"+nombre, httpOptions);
  }

  deleteCarrera(nombre : String): Observable<Message>{
    console.log("LLAMADO");
    return this.http.delete<Message>(this.baseUrl+"/carrera/"+nombre, httpOptions);
  }

  modifyCarrera(modifiedCarrera : Carrera): Observable<Carrera>{
    return this.http.put<Carrera>(this.baseUrl+"/carrera/"+modifiedCarrera.nombre, modifiedCarrera,httpOptions);
  }

  getUserCarreras():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.baseUrl+"/carrera/user", httpOptions);
  }

}
