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

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerProductos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Productos = respuesta;
    });
  }

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.BorrarProducto(id).subscribe((respuesta) =>{
        this.Productos.splice(iControl, 1);
      });
    }
 
  }

}
