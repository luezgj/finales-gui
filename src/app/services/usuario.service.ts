import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../model/usuario';
import { Carrera } from '../model/carrera';
import { Message } from '../message';
import { AppComponent } from '../app.component'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private baseUrl = AppComponent.baseURL;

  constructor(private http: HttpClient) { }

  deleteUser(): Observable<Message>{
  	return this.http.delete<Message>(this.baseUrl+"/usuario", httpOptions);
  }

  modifyUser(modifiedUser: Usuario):Observable<Usuario>{
  	return this.http.put<Usuario>(this.baseUrl+"/usuario", modifiedUser, httpOptions);
  }

  setCarreras(carrerasList: Carrera[]):Observable<Usuario>{
    console.log(carrerasList);
    var carreraNameList= [];
    for (var i = 0; i < carrerasList.length ; i++) {
      console.log(carrerasList[i]);
      carreraNameList.push(carrerasList[i].nombre);
    }
    console.log(carreraNameList);
    return this.http.put<Usuario>(this.baseUrl+"/usuario/carreras", carreraNameList, httpOptions);
  }
}
