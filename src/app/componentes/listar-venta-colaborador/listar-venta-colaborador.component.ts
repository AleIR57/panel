import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-venta-colaborador',
  templateUrl: './listar-venta-colaborador.component.html',
  styleUrls: ['./listar-venta-colaborador.component.css']
})
export class ListarVentaColaboradorComponent implements OnInit {

  
  VentasAux:any = [];
  VentasAux2:any = [];
  VentasAux3:any = [];
  Ventas:any = [];
  Clientes: any;
  Productos: any = [];
  EnTramite = false;
  correoVendedorEncriptado: any = localStorage.getItem('token');
  _secretKey:any = "dsfdadasd";
  bytes:any;
  correoVendedor: any;
  saldo:any;
  creditos:any;
  idVendedor: any;

  constructor(private crudService:CrudService) {
   
    

   }

  ngOnInit(): void {

    console.log("Correo:" + this.correoVendedorEncriptado);
    this.bytes = CryptoJS.AES.decrypt(this.correoVendedorEncriptado, this._secretKey);
    if (this.bytes.toString()) {
      this.correoVendedor = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
      console.log("El correo es:" + this.correoVendedor);
      this.crudService.ObtenerVendedorPorCorreo(this.correoVendedor).subscribe(respuesta=>{

        this.saldo = respuesta[0]['saldo'];
        this.creditos = respuesta[0]['creditos'];
        this.idVendedor = respuesta[0]['idVendedor'];
        console.log("El id del vendedor es: " + this.idVendedor);

             
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
            console.log(this.VentasAux2[k]);
          }

          
          
        });
      }
   
    });
          
     
    
        });
        
    }

 

    
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
