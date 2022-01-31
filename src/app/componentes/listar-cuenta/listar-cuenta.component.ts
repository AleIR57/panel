import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cuenta',
  templateUrl: './listar-cuenta.component.html',
  styleUrls: ['./listar-cuenta.component.css']
})
export class ListarCuentaComponent implements OnInit {

  Cuentas:any;
  Productos: any = [];
  pageActual: number = 1;
  


  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerCuentas().subscribe(respuesta=>{
      console.log(respuesta);
      this.Cuentas = respuesta;

      for(let i = 0; i < Object.keys(this.Cuentas).length; i++){
        this.crudService.ObtenerProducto(this.Cuentas[i]['idProducto']).subscribe(respuesta=>{
          
          this.Productos.push(respuesta)
          console.log(this.Productos);
        });
      }
    });

  
  }

  borrarRegistro(id:any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.BorrarCuenta(id).subscribe((respuesta) =>{
        this.Cuentas.splice(iControl, 1);
      });
    }
 
  }
}
