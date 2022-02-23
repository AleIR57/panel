import { ApartadoService } from './../../servicio/apartado.service';
import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  Clientes:any;
  Vendedores:any = [];
  pageActual: number = 1;
  cantidadClientes:any;
  apartado:any;


  constructor(private crudService:CrudService, private apartadoService: ApartadoService) { }

  ngOnInit(): void {
    this.apartado = this.apartadoService.definirApartado('Clientes desde');
    this.crudService.ObtenerClientes().subscribe(respuesta=>{
     
      this.Clientes = respuesta;

      this.cantidadClientes = Object.keys(this.Clientes).length;
      for(let i = 0; i < Object.keys(this.Clientes).length; i++){
        this.crudService.ObtenerVendedor(this.Clientes[i]['idVendedor']).subscribe(respuesta=>{
          
          this.Vendedores.push(respuesta)
          
        });
      }
    });
  }

  borrarRegistro(id:any, iControl:any){

    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.BorrarCliente(id).subscribe((respuesta) =>{
        this.Clientes.splice(iControl, 1);
      });
    }
 
  }

}
