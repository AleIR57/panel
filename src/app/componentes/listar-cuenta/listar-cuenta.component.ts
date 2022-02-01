import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listar-cuenta',
  templateUrl: './listar-cuenta.component.html',
  styleUrls: ['./listar-cuenta.component.css'],
  providers: [DatePipe]
})
export class ListarCuentaComponent implements OnInit {

  Cuentas:any;
  Productos: any = [];
  pageActual: number = 1;
  cantidadCuentas:any;
  cuentasNoRenovadas: any = [];
  cantidadCuentasNoRenovadas: any = [];
  formularioDeCuentas:FormGroup;
  


  constructor(private crudService:CrudService, private datePipe: DatePipe, public formulario: FormBuilder) { 

    this.formularioDeCuentas = this.formulario.group({
      estado: ['Sin renovar'],
     })
  }

  ngOnInit(): void {
    this.crudService.ObtenerCuentas().subscribe(respuesta=>{
     
      this.Cuentas = respuesta;

      this.cantidadCuentas = Object.keys(this.Cuentas).length;
      for(let i = 0; i < Object.keys(this.Cuentas).length; i++){
        this.crudService.ObtenerProducto(this.Cuentas[i]['idProducto']).subscribe(respuesta=>{
          
          this.Productos.push(respuesta)
       
        });
      }

  
      
       

      
     
     
    });

    this.crudService.ObtenerCuentasNoRenovadas(this.datePipe.transform(new Date(), 'yyyy-MM-dd')).subscribe(respuesta2=>{
          
      this.cuentasNoRenovadas = respuesta2
      this.cantidadCuentasNoRenovadas = this.cuentasNoRenovadas.length;
      for(let k = 0; k <  Object.keys(this.cuentasNoRenovadas).length; k++){
        this.crudService.EditarEstadoDeCuenta(this.cuentasNoRenovadas[k]['idCuenta'], this.formularioDeCuentas.value).subscribe(() =>{
        });
      }
  
    });
  
    
    
   

  
  }

  borrarRegistro(id:any, iControl:any){

    if(window.confirm("¿Desea borrar el registro?")){
      this.crudService.BorrarCuenta(id).subscribe((respuesta) =>{
        this.Cuentas.splice(iControl, 1);
      });
    }
 
  }
}
