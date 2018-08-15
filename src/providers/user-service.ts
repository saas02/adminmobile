import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/*
  Generated class for the UserService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
    console.log('Hello UserService Provider');
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }

  getList(){
    return this.http.get('https://randomuser.me/api/?results=25');
  }

  getListCars(){
    return this.http.get('https://randomuser.me/api/?results=25');
  }

}
