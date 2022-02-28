import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-vendedor',
  templateUrl: './listar-vendedor.component.html',
  styleUrls: ['./listar-vendedor.component.css']
})
export class ListarVendedorComponent implements OnInit {

  
  Vendedores:any;
  Roles:any = [];
  pageActual: number = 1;
  cantidadColaboradores:any;


  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerVendedores().subscribe(respuesta=>{

      this.Vendedores = respuesta;
      this.cantidadColaboradores = Object.keys(this.Vendedores).length;
      for(let i = 0; i < Object.keys(this.Vendedores).length; i++){
        this.crudService.ObtenerRol(this.Vendedores[i]['idRol']).subscribe(respuesta=>{
          
          this.Roles.push(respuesta)

        });
      }
    });
  }

  borrarRegistro(id:any, iControl:any){
  
    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.BorrarVendedor(id).subscribe((respuesta) =>{
        this.Vendedores.splice(iControl, 1);
      });
    }
 
  }

}
