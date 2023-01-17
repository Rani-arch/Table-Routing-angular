import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
})
export class BarchartComponent implements OnInit {
  arr: any = [40, 70, 20, 10, 10];
  constructor() {}

  ngOnInit() {
    this.getdata();
  }
  public pieChartLabels: string[] = [
    'Chrome',
    'Safari',
    'Firefox',
    'Internet Explorer',
    'Other',
  ];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  getdata() {
    this.arr.forEach((arr) => {
      this.pieChartData = this.arr;
      console.log(arr);
    });
  }
}
