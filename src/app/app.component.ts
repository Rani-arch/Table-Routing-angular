import { Component, Input } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';

import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { rendererTypeName } from '@angular/compiler';
import { Log } from '@angular/core/testing/src/logger';
// import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  Password;
  show = false;
  step: any = 1;
  data = {
    Username: '',
    password: '',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWNkYjE1ZjFlY2M5Nzk4NTE3NzQxMGIiLCJpYXQiOjE2NzIyMjgwOTgsImV4cCI6MTY3MjgzMjg5OH0.yR0tf3Laf-vd4eQS5r_QG3XF31lubotoGmQgV2_LJH0',
  };

  key: string = 'Hello';
  myItem: string = 'hey';
  collapse = false;
  searchText: string;
  User: any;
  links: any;
  // LoggedIn: boolean = false;
  postId: any;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.Password = 'Password';

    let headers = new HttpHeaders({
      'x-rapidapi-host': 'https://jsonplaceholder.typicode.com/posts',
    });
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts', {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
      });

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
  ngDoCheck() {
    console.log('change');
  }

  togglesidebar() {
    // alert(this.collapse);
    this.collapse;
    this.collapse = !this.collapse;
  }

  //   let arrow = document.querySelectorAll(".arrow");
  // for (var i = 0; i < arrow.length; i++) {
  //   arrow[i].addEventListener("click", (e)=>{
  //  let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
  //  arrowParent.classList.toggle("showMenu");
  //   }); JSONPLACEHOLDERTYPI
  // }

  // this sidebar = document.querySelector(".sidebar");
  // let sidebarBtn = document.querySelector(".bx-menu");
  // console.log(sidebarBtn);
  // sidebarBtn.addEventListener("click", ()=>{
  //   sidebar.classList.toggle("close");
  // });

  save() {
    let data = { id: 1, name: 'abc' };
    sessionStorage.setItem('session', JSON.stringify(data));
    this.myItem = localStorage.getItem(this.key);
    // localStorage.setItem(this.key, 'New Value');
    // this.myItem = localStorage.getItem(this.key);
    // console.log(localStorage);
    // localStorage.removeItem(this.key);
    // this.myItem = localStorage.getItem(this.key);
    // // localStorage.clear();
    // this.myItem = localStorage.getItem(this.key);
  }
  getvalue() {
    localStorage.setItem('session', JSON.stringify(this.data));
    // console.log(this.data);
  }
  logout() {
    alert(4);
    this.step = this.step - 1;
    localStorage.clear();
    this.router.navigate(['']);
    // this.authService.logout();
  }
  // passvalue(password: string){
  //   sessionStorage.setItem('session', JSON.stringify(this.data));
  //   // console.log(this.data)
  // }

  multistep = new FormGroup({
    Userdetails: new FormGroup({
      UserId: new FormControl('', ),
      Password: new FormControl(''),
    }),
  });

  Login(item: any) {
    this.step = this.step + 1;
    // this.authService.login();
    // console.warn(item);

    // console.log(this.data);
  }

  onClick() {
    if (this.Password === 'Password') {
      this.Password = 'text';
      this.show = true;
    } else {
      this.Password = 'Password';
      this.show = false;
    }
  }
}
