import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-venta',
  templateUrl: './listar-venta.component.html',
  styleUrls: ['./listar-venta.component.css']
})
export class ListarVentaComponent implements OnInit {

  Ventas:any = [];
  Clientes: any = [];
  Productos: any = [];
  EnTramite = false;
  correoVendedorEncriptado: any = localStorage.getItem('token');
  _secretKey:any = "dsfdadasd";
  bytes:any;
  correoVendedor: any;
  saldo:any;
  creditos:any;
  pageActual: number = 1;


  constructor(private crudService:CrudService, private router: Router) { }

  ngOnInit(): void {

   

    this.bytes = CryptoJS.AES.decrypt(this.correoVendedorEncriptado, this._secretKey);
    if (this.bytes.toString()) {
      this.correoVendedor = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
      this.crudService.ObtenerVendedorPorCorreo(this.correoVendedor).subscribe(respuesta=>{
        this.saldo = respuesta[0]['saldo'];
        this.creditos = respuesta[0]['creditos'];
       
      });
    }

    this.crudService.ObtenerVentas().subscribe(respuesta=>{
   
      this.Ventas = respuesta;



    for(let i = 0; i < Object.keys(this.Ventas).length; i++){
      this.crudService.ObtenerCliente(this.Ventas[i]['idCliente']).subscribe(respuesta=>{
        
        this.Clientes.push(respuesta)

      });
    }

    for(let i = 0; i < Object.keys(this.Ventas).length; i++){
      this.crudService.ObtenerProducto(this.Ventas[i]['idProducto']).subscribe(respuesta=>{
        
        this.Productos.push(respuesta)
   
      });
    }


    

    });
    

    
  }

  

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.BorrarVenta(id).subscribe((respuesta) =>{
        this.Ventas.splice(iControl, 1);
      });
    }
 
  }
}
