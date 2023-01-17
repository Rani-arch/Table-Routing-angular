import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  status: any;
data: any;
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http
      .delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        this.status = "delete successfully";
        console.log(data);
      });
  }
}


