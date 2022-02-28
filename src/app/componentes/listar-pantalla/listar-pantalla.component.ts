import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pantalla',
  templateUrl: './listar-pantalla.component.html',
  styleUrls: ['./listar-pantalla.component.css']
})
export class ListarPantallaComponent implements OnInit {

  Ventas:any = [];
  Cuentas:any = [];
  Productos: any = [];
  pageActual: number = 1;
  cantidadPantallas:any;

  constructor(private crudService:CrudService) { }

  ngOnInit(): void {

    this.crudService.ObtenerVentas().subscribe(respuesta=>{
     
      this.Ventas = respuesta;

   
      this.cantidadPantallas = Object.keys(this.Ventas).length;
    for(let i = 0; i < Object.keys(this.Ventas).length; i++){
      this.crudService.ObtenerCuenta(this.Ventas[i]['idCuenta']).subscribe(respuesta=>{
        
        this.Cuentas.push(respuesta)
      });

   
  
    }

    for(let i = 0; i < Object.keys(this.Ventas).length; i++){
      this.crudService.ObtenerProducto(this.Ventas[i]['idProducto']).subscribe(respuesta=>{
    
        this.Productos.push(respuesta)
      });
    }

  });
    
  }

}
