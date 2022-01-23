import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  formularioDeClientes:FormGroup;

  constructor(public formulario: FormBuilder, private crudService: CrudService, private ruteador: Router) {
    this.formularioDeClientes= this.formulario.group({
      nombres: [''],
      apellidos: [''],
      whatsapp: [''],
      telefono: [''],
      correo:[''],
      idVendedor:[1],

    })
   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log("Me presionaste ");
    console.log(this.formularioDeClientes.value);
    this.crudService.AgregarCliente(this.formularioDeClientes.value).subscribe(respuesta =>{
      this.ruteador.navigateByUrl('/listar-cliente')
    });
   
  }

}
