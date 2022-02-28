import { CrudService } from './crud.service';
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
    baseUrl:string = "https://conexionproent.com/crudPanel/php/";
    _secretKey:any = "dsfdadasd";
    correoVendedorEncriptado: any = localStorage.getItem('token');
  bytes:any;
  correoVendedor: any;
  saldo:any;
  creditos:any;
  roleAs:any;
  userrole:any;
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private httpClient : HttpClient, private crudService: CrudService) { }
    public userlogin(username:any, password:any) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(Users => {
      console.log(Users[0].correo);
      this.setToken(CryptoJS.AES.encrypt(JSON.stringify(Users[0].correo), this._secretKey).toString());
      this.setRole(CryptoJS.AES.encrypt(JSON.stringify(Users[0].idRol), this._secretKey).toString());
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

    isAdmin() {
      


       this.userrole = this.getRole();
       
    this.bytes = CryptoJS.AES.decrypt(this.userrole, this._secretKey);
    if (this.bytes.toString()) {
      this.userrole = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
    }
    
    
      if (Number(this.userrole) == 2) {
      return true;
      }
      return false;
      }

    setRole(rol: string){
    
      localStorage.setItem('ROLE', rol);
    }

    getRole() {
      
      return localStorage.getItem('ROLE');
    }

    deleteRole() {
      localStorage.removeItem('ROLE');
      }
}