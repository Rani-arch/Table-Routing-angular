import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  putId: any;
  constructor(private http: HttpClient) {}
  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngOnInit() {
    const body = { title: 'Angular put api' };
    this.http
      .put<any>('https://jsonplaceholder.typicode.com/posts/1', {
        body,
      })
      .subscribe((data) => {
        this.putId = data.id;
        console.log(data);
      });
  }
}
