import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.component.html',
  styleUrls: ['./agregar-cuenta.component.css']
})
export class AgregarCuentaComponent implements OnInit {

  formularioDeCuentas:FormGroup;
  Productos:any;
  selectProducto: boolean = true;

  constructor(public formulario: FormBuilder, private crudService: CrudService, private ruteador: Router) {
    this.formularioDeCuentas= this.formulario.group({
      idProducto: [0],
      correo: [''],
      contrasena: [''],
      fechaInicio: new Date(),
      fechaExpiracion: new Date(new Date().setMonth(new Date().getMonth() + 1)),
      nombrePerfil:[''],
      ping:[''],
      estado:['Desconectado'],
    })
   }

  ngOnInit(): void {
    this.crudService.ObtenerProductos().subscribe(respuesta=>{
      this.Productos = respuesta;

    });
  }

  seleccionarProducto(){
    if(+this.formularioDeCuentas.value['idProducto'] == 0){
     
      this.selectProducto = true;
    }
    else if(+this.formularioDeCuentas.value['idProducto'] > 0){
     
      this.selectProducto = false;
    }
  }

  enviarDatos():any{
   
      this.crudService.AgregarCuenta(this.formularioDeCuentas.value).subscribe(respuesta =>{
        this.ruteador.navigateByUrl('/listar-cuenta')
      });
    
  
  
  }


}
