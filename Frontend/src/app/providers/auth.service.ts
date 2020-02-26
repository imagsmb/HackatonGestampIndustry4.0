import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:3000"

  constructor(
    private httpClient: HttpClient,
  ) {

  }

  login(user: User) {

    let headers = new HttpHeaders();
    //headers.append('Authorization', 'Bearer ' + this.userService.user.API_TOKEN_KEY);

    return new Promise(resolve => {

      this.httpClient.post(this.url + "/user/login", user, { headers: headers })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    })
  }
  register(user: User) {

    let headers = new HttpHeaders();
    //headers.append('Authorization', 'Bearer ' + this.userService.user.API_TOKEN_KEY);

    return new Promise(resolve => {

      this.httpClient.post(this.url + "/user/register", user, { headers: headers })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
    })
  }
  
  


}