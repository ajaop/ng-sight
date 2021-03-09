import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  constructor(private _http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get('http://localhost:5000/api/order/' + pageIndex + '/' + pageSize)
    .pipe(map((response: any) => response.json()));

  }

}
