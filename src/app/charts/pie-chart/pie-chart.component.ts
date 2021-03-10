import { Component, Input, OnInit } from '@angular/core';
import {values} from "lodash";
import {THEME_COLORS} from '../../shared/theme.colors';

const theme = 'Bright';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  @Input() inputData: any;
  @Input() limit!: number;

  //pieChartData: number[] = [350, 450, 120];
  //pieChartLabels: string[] = ['XYZ Logistics', 'Main St Bakery', 'Acme Hosting'];

  pieChartData!: number[];
  pieChartLabels!: string[];
  colors: any[] = [
    {
      backgroundColor: this.themeColors(theme),
      borderColor: '#111'
    }
  ];

 // pieChartType= 'pie';

  ngOnInit(): void {
    this.parseChartData(this.inputData, this.limit);
  }

  parseChartData(res: any, limit?: number){
    //console.log('response:', res);
    const allData = res.slice(0, limit);
    //console.log('allData (slice):', allData);
    this.pieChartData = allData.map((x:any) => values(x)[1]);
    this.pieChartLabels = allData.map((x:any) => values(x)[0]);
  }

  themeColors(setName: string): string[]{
    const c = THEME_COLORS.slice(0)
    ?.find(set => set?.name === setName)?.colorSet;

      return c!;
  }

}
