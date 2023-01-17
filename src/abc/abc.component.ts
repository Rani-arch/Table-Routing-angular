import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css'],
})
export class abcComponent implements OnInit {
  name: ' Green world';
  postId: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  //   const body = { title: 'Angular PUT Request Example' };
  //   this.http
  //     .put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
  //     .subscribe(data => this.postId = data.id);
  //   console.log(data);
  // }

  this.http
  .post<Article>('https://reqres.in/api/posts', {
    title: 'Angular POST Request Example',
  })
  .subscribe((data) => {
    this.postId = data.id;
    console.log(data.id);
  });
interface Article {
  id: string;
  title: string;
}
}
}
