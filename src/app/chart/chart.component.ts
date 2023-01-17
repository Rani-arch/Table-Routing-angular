import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  try: any;
  mySubscription: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.try = data;
        console.log(data);
      });
  }
}
