import { Component, OnInit } from '@angular/core';
import students from '../tabel.json';
import { NavigationEnd, Router } from '@angular/router';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Location } from '@angular/common';

interface Students {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [Location],
})
export class TableComponent implements OnInit {
  students: any = students.data;
  searchText;
  collection = [];
  start: any;
  last;
  amount: any;
  filterTerm: string = '';
  filteredPeople: students[];
  show: boolean = false;
  public deploymentName: any;
  deploymentId: any;
  deploymentgender: any;
  deploymentEmail: any;
  mcd: any;
  remove: any;
  mySubscription: any;

  constructor(private location: Location, private router: Router) {
    // this.filterTerm = '';
    // for (let i = 1; i <= 100; i++) {
    //   this.collection.push(`item ${i} `);
    // }
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    // this.mySubscription = this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.router.navigated = false;
    //     window.scrollTo(0, 0);
    //     this.router.navigateByUrl('/table');
    // this.router.navigate([this.router.url]);
    //   }
    // });
  }

  // refresh() {
  //   window.location.replace;
  // }
  ngOnInit(): void {
    // const currentRoute = this.router.url;

    console.log(students);
    this.filteredPeople = this.students;
    console.log(this.filteredPeople);
    this.totalsalary();
  }

  // DeleteEmployee()
  // {
  //   this.employeeService.deleteEmployee(id)
  //   .subscribe(
  //     (data) =>{
  //       console.log(data);

  //       this.ngOnInit();

  //     }),
  //     err => {
  //       console.log("Error");
  //     }
  // }

  totalsalary() {
    this.amount = 0;
    for (let i = 0; i <= 9; i++) {
      this.amount += students.data[i].salary;
      if (this.last == 2) {
        continue;
      }
      console.log(this.amount);
    }

    // console.log(students.data[2].salary);
  }
  filterPeopleByGender(value) {
    this.filterTerm;
    console.log(this.filterTerm);
    if (this.filterTerm == '') {
      this.students = students.data;
    } else {
      this.students = this.students.filter((value) => {
        return (
          value.name.indexOf(this.filterTerm) > -1 ||
          value.email.indexOf(this.filterTerm) > -1
        );
      });
    }
  }

  // hello() {
  //   this.data = Math.floor(Math.random() * 100);
  // }

  listcount(count) {
    this.start = count;
    this.start = this.start * 10 - 9;
    this.last = count * 10;
    if (this.last > this.students.length) {
      this.last = this.students.length;
    }
    console.log(this.students + '  ' + this.start + ' ' + this.last);
  }

  delete(ndx) {
    // alert(d);
    const index = this.students.indexOf(ndx);
    // alert(index);
    // console.log(d);
    this.students.splice(ndx, 1);

    console.log(ndx);
  }
  // Add() {
  //   var a = {
  //     id: 15,
  //     name: 'Peter',
  //     email: 'peter@gmail.com',
  //     gender: 'male',
  //   };
  //   this.students.push(a);
  //   console.log(this.students);
  // }

  showModal() {
    this.show = !this.show;
    console.log(this.show);
  }

  fnAddDeploytment() {
    alert(this.deploymentName);
    // alert(this.deploymentId);

    var a = {
      id: this.deploymentId,
      name: this.deploymentName,
      gender: this.deploymentgender,
      email: this.deploymentEmail,
    };
    this.students.push(a);
  }

  editdata(ind) {
    // this.mcd = this.students.indexOf(ind.id);

    this.mcd = ind;

    console.log(this.mcd);
  }

  // changeLocation(locationData) {
  //   // save current route first
  //   const currentRoute = this.router.url;

  //   this.router
  //     .navigateByUrl('/table', { skipLocationChange: true })
  //     .then(() => {
  //       this.router.navigate([currentRoute]); // navigate to same route
  //     });
  // }
  // refreshPage() {
  //   window.location.reload();
  // }

  ngOnDestroy() {
    // this.router.navigateByUrl('/chart');
    // alert(9);
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
