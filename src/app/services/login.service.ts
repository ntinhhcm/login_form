import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials) {
    return new Promise(
      (resolve, reject) => {
        let headers = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded'})
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'POST, GET')
        .set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
        .set('Access-Control-Max-Age', '86400')
        .set('Accept', 'application/json');

        this.http.post('http://dev.www.rpm-tools.com/api/login',credentials)
          .subscribe(
            (res) => {
              resolve(res);
            },
            (err) => {
              reject(err);
            }
          );
      }
    );
  }

}
