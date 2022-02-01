import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  Productos:any;
  pageActual: number = 1;
  cantidadProductos:any;

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerProductos().subscribe(respuesta=>{

      this.Productos = respuesta;
      this.cantidadProductos = Object.keys(this.Productos).length;
    });
  }

  borrarRegistro(id:any, iControl:any){

    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.BorrarProducto(id).subscribe((respuesta) =>{
        this.Productos.splice(iControl, 1);
      });
    }
 
  }

}
