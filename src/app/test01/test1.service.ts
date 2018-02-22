import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';


@Injectable()
export class Test1Service {

  constructor(private http: HttpClient) {}

  public getButtonsText(): Observable<any> {
    return this.http.get('./../assets/data.json');
  }

}
