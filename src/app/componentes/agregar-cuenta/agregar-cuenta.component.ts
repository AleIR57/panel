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

  constructor(public formulario: FormBuilder, private crudService: CrudService, private ruteador: Router) {
    this.formularioDeCuentas= this.formulario.group({
      idProducto: [''],
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
      console.log(respuesta);
      this.Productos = respuesta;

    });
  }

  enviarDatos():any{
    console.log("Me presionaste ");
    console.log(this.formularioDeCuentas.value);
    this.crudService.AgregarCuenta(this.formularioDeCuentas.value).subscribe(respuesta =>{
      this.ruteador.navigateByUrl('/listar-cuenta')
    });
   
  }


}
