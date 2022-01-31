import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cliente-colaborador',
  templateUrl: './listar-cliente-colaborador.component.html',
  styleUrls: ['./listar-cliente-colaborador.component.css']
})
export class ListarClienteColaboradorComponent implements OnInit {
  Clientes:any;
  Vendedores:any = [];
  correoVendedorEncriptado: any = localStorage.getItem('token');
  _secretKey:any = "dsfdadasd";
  bytes:any;
  correoVendedor: any;
  idVendedor:any;
  pageActual: number = 1;


  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    console.log("Correo:" + this.correoVendedorEncriptado);
    this.bytes = CryptoJS.AES.decrypt(this.correoVendedorEncriptado, this._secretKey);
    if (this.bytes.toString()) {
      this.correoVendedor = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
      this.crudService.ObtenerVendedorPorCorreo(this.correoVendedor).subscribe(respuesta=>{
        this.idVendedor = respuesta[0]['idVendedor'];
        this.crudService.ObtenerClientesDeColaborador(respuesta[0]['idVendedor']).subscribe(respuesta=>{
          console.log(respuesta);
          this.Clientes = respuesta;
    
    
          for(let i = 0; i < Object.keys(this.Clientes).length; i++){
            this.crudService.ObtenerVendedor(this.Clientes[i]['idVendedor']).subscribe(respuesta=>{
              
              this.Vendedores.push(respuesta)
              console.log(this.Vendedores);
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
      this.crudService.BorrarCliente(id).subscribe((respuesta) =>{
        this.Clientes.splice(iControl, 1);
      });
    }
 
  }

}
