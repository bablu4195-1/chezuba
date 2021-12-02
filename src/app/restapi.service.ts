import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Datahub } from './main.model';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  url: string = "https://jsonplaceholder.typicode.com/posts"
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get<Datahub>(this.url);
  }
  display(value: boolean) {
    this.status.next(value);
}
}
