// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import Pie from '../pie.json';
// import { BaseChartDirective } from 'ng2-charts/ng2-charts';

// // import { HttpErrorResponse } from '@angular/common/https';

// export class PieComponent implements OnInit {
//   userlist: any;
//   label: any;
//   data: [47, 9, 28, 54, 77];

//   constructor(private http: HttpClient) {
//     this.userlist = [];
//   }

//   public pieChartLabels: string[] = [];
//   public pieChartData: number[] = [];
//   public pieChartType: string = 'pie';

//   public chartClicked(e: any): void {
//     console.log(e);
//   }
//   ngOnInit(): void {
//     // this.getUserlist();
//     // this.httpService.get('./pie.json', { responseType: 'json' }).subscribe(
//     //   (data) => {
//     //     this.pieChartData = data as any[];
//     //   },
//     // (err: HttpErrorResponse) => {
//     //   console.log(err.message);
//     // }
//     // );
//   }

//   getData() {
//     this.data.forEach((element: any) => {
//       console.log(element);
//     });
//   }
// }

// // events

// // getUserlist() {
// //   this.http
// //     .get<any>('https://jsonplaceholder.typicode.com/users')
// //     .subscribe((result) => {
// //       this.userlist = result;
// //       console.log(result);
// //     });

// // {
// //   "data": [
// //     {
// //       "value": 1,
// //       "label": "chrome"
// //     },
// //     {
// //       "value": 12,
// //       "label": "google"
// //     },
// //     {
// //       "value": 30,
// //       "label": "youtube"
// //     },
// //     {
// //       "value": 54,
// //       "label": "firfox"
// //     },
// //     {
// //       "value": 64,
// //       "label": "GPTChat"
// //     },
// //     {
// //       "value": 4,
// //       "label": "whatsapp"
// //     },
// //     {
// //       "value": 34,
// //       "label": "linkdln"
// //     },
// //     {
// //       "value": 24,
// //       "label": "instagram"
// //     }
// //   ]
// // }
