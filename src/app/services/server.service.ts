import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerMessage} from '../shared/server-message';
import {Server} from '../shared/server';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'q=0.8;application/json;q=0.9'
    });
   }

   
  headers!: HttpHeaders;
  

  getServers(): Observable<Server[]> {
    return this._http.get('http://localhost:5000/api/server')
    .pipe(
      map((res:any) => res),
      catchError(this.handleError)
    );
  }

  
  handleError(error: any){
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - $(error.statusText)` : `Server error`;
 
    console.log(errMsg);
    return throwError(errMsg)
  }

  handleServerMessage(msg: ServerMessage): Observable<Response>{
    const url = 'http://localhost:5000/api/server/' + msg.id;
    const options = {
      headers: new HttpHeaders().append('key', 'value'),
      params: new HttpParams().append('key', 'value')
    }
  
    return this._http.put(url, msg, options).pipe(map((res:any) => res));
  }

  
}
