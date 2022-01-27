import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';

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


  constructor(private crudService:CrudService) { }

  ngOnInit(): void {

    console.log("Correo:" + this.correoVendedorEncriptado);
    this.bytes = CryptoJS.AES.decrypt(this.correoVendedorEncriptado, this._secretKey);
    if (this.bytes.toString()) {
      this.correoVendedor = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
      this.crudService.ObtenerVendedorPorCorreo(this.correoVendedor).subscribe(respuesta=>{
        this.saldo = respuesta[0]['saldo'];
        this.creditos = respuesta[0]['creditos'];
       
      });
    }

    this.crudService.ObtenerVentas().subscribe(respuesta=>{
      console.log(respuesta);
      this.Ventas = respuesta;

      console.log("sasadasd" + this.Ventas.length);

    for(let i = 0; i < Object.keys(this.Ventas).length; i++){
      this.crudService.ObtenerCliente(this.Ventas[i]['idCliente']).subscribe(respuesta=>{
        
        this.Clientes.push(respuesta)
        console.log(this.Clientes);
      });
    }

    for(let i = 0; i < Object.keys(this.Ventas).length; i++){
      this.crudService.ObtenerProducto(this.Ventas[i]['idProducto']).subscribe(respuesta=>{
        
        this.Productos.push(respuesta)
        console.log(this.Productos);
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
