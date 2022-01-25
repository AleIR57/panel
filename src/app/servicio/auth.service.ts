import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './Modelos';
import * as CryptoJS from 'crypto-js';

@Injectable({
providedIn: 'root'
})

export class AuthService {
    redirectUrl!: string;
    baseUrl:string = "http://localhost/crudPanel/php";
    _secretKey:any = "dsfdadasd";
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private httpClient : HttpClient) { }
    public userlogin(username:any, password:any) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(Users => {
      console.log(Users[0].correo);
      this.setToken(CryptoJS.AES.encrypt(JSON.stringify(Users[0].correo), this._secretKey).toString());
      this.getLoggedInName.emit(true);
      return Users;
    }));
    }

    public userregistration(name:any,email:any,pwd:any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
    .pipe(map(Users => {
      return Users;
    }));
    }

    //token
    setToken(token: string) {
    localStorage.setItem('token', token);
    }
    getToken() {
    return localStorage.getItem('token');
    }
    deleteToken() {
    localStorage.removeItem('token');
    }
    isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
    return true
    }
    return false;
    }
}