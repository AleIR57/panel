import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  Clientes:any;


  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerClientes().subscribe(respuesta=>{
      console.log(respuesta);
      this.Clientes = respuesta;
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
