import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin = {
    username: '',
    password: '',
  };

  constructor(
    private loginService: LoginService) {}

  ngOnInit() {
  }

  login(username: string, password: string) {
    if ( ! username || ! password) {
      return false;
    }
    this.userLogin.username = username;
    this.userLogin.password = password;
    this.loginService.login(this.userLogin)
    .then((result) => {
      if (result) {
        localStorage.setItem('userData', JSON.stringify({'token' : result['token']}));
      }
    }, (err) => {
      console.log(err.error.error_code);
    });
  }

  logout() {
    localStorage.setItem('userData', '');
    localStorage.clear();
  }
}
