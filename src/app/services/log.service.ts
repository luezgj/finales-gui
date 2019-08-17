import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Log } from '../model/log';
import { Message } from '../message';
import { AppComponent } from '../app.component'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class LogService {

	private baseUrl = AppComponent.baseURL;

  constructor(private http: HttpClient) { }

  createLog(newLog: Log): Observable<Log>{
  	console.log("Creando el nuevo log");
    console.log(newLog);
    return this.http.post<Log>(this.baseUrl+"/log", newLog, httpOptions);
  }

  //user must be administrator
  getLogs():Observable<Log[]>{
  	return this.http.get<Log[]>(this.baseUrl+"/log", httpOptions);
  }

  getLog(id: number):Observable<Log>{
  	return this.http.get<Log>(this.baseUrl+"/log/"+id	, httpOptions);
  }

  deleteLog(id: number):Observable<Message>{
  	return this.http.delete<Message>(this.baseUrl+"/log/"+id	, httpOptions);
  }

  modifyLog(modifiedLog: 	Log):Observable<Log>{
  	return this.http.put<Log>(this.baseUrl+"/log/"+modifiedLog.id	,modifiedLog, httpOptions);
  }

  getUserLogs():Observable<Log[]>{
    return this.http.get<Log[]>(this.baseUrl+"/log/user", httpOptions);
  }

}
