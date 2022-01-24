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


  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerVendedores().subscribe(respuesta=>{
      console.log(respuesta);
      this.Vendedores = respuesta;

      for(let i = 0; i < Object.keys(this.Vendedores).length; i++){
        this.crudService.ObtenerRol(this.Vendedores[i]['idRol']).subscribe(respuesta=>{
          
          this.Roles.push(respuesta)
          console.log(this.Roles);
        });
      }
    });
  }

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.BorrarVendedor(id).subscribe((respuesta) =>{
        this.Vendedores.splice(iControl, 1);
      });
    }
 
  }

}
