import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Order } from '../shared/order';


@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  constructor(private _http: HttpClient) { }

  /*
  getOrders(pageIndex: number, pageSize: number):Observable<Order[]> {
    return this._http.get<Order[]>('http://localhost:5000/api/order/' + pageIndex + '/' + pageSize);

  }

  */

  
  

   getOrders(pageIndex: number, pageSize: number) {
    return this._http.get('http://localhost:5000/api/order/' + pageIndex + '/' + pageSize);

  }

  getOrderByCustomer(n: number){
    return this._http.get('http://localhost:5000/api/order/bycustomer/' + n);

  }

  getOrderByState(){
    return this._http.get('http://localhost:5000/api/order/bystate/');

  }
  
  

}
