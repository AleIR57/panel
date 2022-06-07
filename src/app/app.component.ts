import { ApartadoService } from './servicio/apartado.service';
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
ventas!: boolean;
correoVendedorEncriptado: any = localStorage.getItem('token');
_secretKey:any = "dsfdadasd";
bytes:any;
correoVendedor: any;
nombre:any;
saldo:any;
creditos:any;
cuentas:any;
cuentasNoRenovadas:any = [];
apartado:any

constructor(private dataService: AuthService, private router: Router, private crudService:CrudService, private apartadoService: ApartadoService) {
  

  dataService.getLoggedInName.subscribe(name => this.changeName(name));
if(this.dataService.isLoggedIn())
{
this.loginbtn=false;
this.logoutbtn=true

if(this.dataService.isAdmin())
{

this.adminbtn=true;

}
else{
  this.adminbtn=false;

}

}
else{
this.loginbtn=true;
this.logoutbtn=false
}



}

ngOnInit(): void {

  this.apartado = this.apartadoService.obtenerApartado();
  if(location.pathname == "/listar-venta"){
    this.ventas = true;
  }

  this.bytes = CryptoJS.AES.decrypt(this.correoVendedorEncriptado, this._secretKey);
  if (this.bytes.toString()) {
    this.correoVendedor = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
    this.crudService.ObtenerVendedorPorCorreo(this.correoVendedor).subscribe(respuesta=>{
      this.nombre = respuesta[0]['nombre'];
      this.saldo = respuesta[0]['saldo'];
      this.creditos = respuesta[0]['creditos'];
     
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
window.location.reload();
this.router.navigateByUrl("/login");
this.logoutbtn = false;
}
}
