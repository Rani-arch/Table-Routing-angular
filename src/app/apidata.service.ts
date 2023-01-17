import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApidataService {
  constructor(private http: HttpClient) {}

  getchart() {
    return this.http.get('');
  }
}
