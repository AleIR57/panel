import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pantalla-colaborador',
  templateUrl: './listar-pantalla-colaborador.component.html',
  styleUrls: ['./listar-pantalla-colaborador.component.css']
})
export class ListarPantallaColaboradorComponent implements OnInit {

  Ventas:any = []
  VentasAux:any = [];
  VentasAux2:any = [];
  VentasAux3:any = [];
  Cuentas:any = [];
  Productos: any = [];
  Clientes: any = [];
  correoVendedorEncriptado: any = localStorage.getItem('token');
  _secretKey:any = "dsfdadasd";
  bytes:any;
  correoVendedor: any;
  idVendedor: any;

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {

    console.log("Correo:" + this.correoVendedorEncriptado);
    this.bytes = CryptoJS.AES.decrypt(this.correoVendedorEncriptado, this._secretKey);
    if (this.bytes.toString()) {
      this.correoVendedor = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
      this.crudService.ObtenerVendedorPorCorreo(this.correoVendedor).subscribe(respuesta=>{

        this.idVendedor = respuesta[0]['idVendedor'];

        this.crudService.ObtenerClientesDeColaborador(this.idVendedor).subscribe(respuesta=>{
          console.log(respuesta);
          this.Clientes = respuesta;
    
          console.log("sasadasd" + this.Clientes.length);
    
          for(let i = 0; i < this.Clientes.length; i++){
            this.crudService.ObtenerVentasDeClientes(this.Clientes[i]['idCliente']).subscribe(respuesta=>{
              this.VentasAux.push(respuesta);
              for(let j = 0; j < this.VentasAux.length; j++){
                this.VentasAux2 = this.VentasAux[j];
               
              }
    
              for(let k = 0; k < this.VentasAux2.length; k++){
                this.Ventas.push(this.VentasAux2[k]);
                this.crudService.ObtenerCuenta(this.VentasAux2[k]['idCuenta']).subscribe(respuesta=>{
                  
                  this.Cuentas.push(respuesta)
                  
                });

                this.crudService.ObtenerProducto(this.VentasAux2[k]['idProducto']).subscribe(respuesta2=>{
                  
                  this.Productos.push(respuesta2)
                });
              }

        

            

    
              
              
            });
          }
       
        });
           
      });
    
  }

}

}
