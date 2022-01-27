import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './servicio/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'panelAngular';
  loginbtn:boolean;
logoutbtn:boolean;
adminbtn!:boolean;
correoVendedorEncriptado: any = localStorage.getItem('token');
_secretKey:any = "dsfdadasd";
bytes:any;
correoVendedor: any;
nombre:any;
saldo:any;

constructor(private dataService: AuthService, private router: Router, private crudService:CrudService) {
dataService.getLoggedInName.subscribe(name => this.changeName(name));
if(this.dataService.isLoggedIn())
{
console.log("loggedin");
this.loginbtn=false;
this.logoutbtn=true

if(this.dataService.isAdmin())
{
console.log("admin");
this.adminbtn=true;
this.router.navigateByUrl("/listar-venta");
}
else{
  this.adminbtn=false;
  this.router.navigateByUrl("/listar-venta-colaborador");
}

}
else{
this.loginbtn=true;
this.logoutbtn=false
}


}

ngOnInit(): void {
  
  console.log("Correo:" + this.correoVendedorEncriptado);
  this.bytes = CryptoJS.AES.decrypt(this.correoVendedorEncriptado, this._secretKey);
  if (this.bytes.toString()) {
    this.correoVendedor = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
    this.crudService.ObtenerVendedorPorCorreo(this.correoVendedor).subscribe(respuesta=>{
      this.nombre = respuesta[0]['nombre'];
      this.saldo = respuesta[0]['saldo'];
     
    });
  }

}


private changeName(name: boolean): void {
this.logoutbtn = name;
this.loginbtn = !name;
}
logout()
{
this.dataService.deleteToken();
this.dataService.deleteRole();
window.location.href = window.location.href;
this.router.navigateByUrl("/login");
this.logoutbtn = false;
}
}
