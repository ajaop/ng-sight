import { Component, OnInit } from '@angular/core';
import {SalesDataService} from '../../services/sales-data.service';

@Component({
  selector: 'app-section-sales',
  templateUrl: './section-sales.component.html',
  styleUrls: ['./section-sales.component.css']
})
export class SectionSalesComponent implements OnInit {

  salesDataByCustomer: any;
  salesDataByState: any;

  constructor(private _salesDataService: SalesDataService) { }

  ngOnInit() {

    this._salesDataService.getOrderByState().subscribe(res =>{
      this.salesDataByState = res;
    });

    this._salesDataService.getOrderByCustomer(5).subscribe(res => {
    this.salesDataByCustomer = res;
    });
  }

}
