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


  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerClientes().subscribe(respuesta=>{
      console.log(respuesta);
      this.Clientes = respuesta;


      for(let i = 0; i < Object.keys(this.Clientes).length; i++){
        this.crudService.ObtenerVendedor(this.Clientes[i]['idVendedor']).subscribe(respuesta=>{
          
          this.Vendedores.push(respuesta)
          console.log(this.Vendedores);
        });
      }
    });
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
