import { Router } from '@angular/router';
import { CrudService } from './../../servicio/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-vendedor',
  templateUrl: './agregar-vendedor.component.html',
  styleUrls: ['./agregar-vendedor.component.css']
})
export class AgregarVendedorComponent implements OnInit {

  formularioDeVendedores:FormGroup;
  existeVendedor: boolean = true;

  constructor(public formulario: FormBuilder, private crudService: CrudService, private ruteador: Router) {
    this.formularioDeVendedores= this.formulario.group({
      nombre: [''],
      nombreUsuario: [''],
      correo: [''],
      contrasena: [''],
      numeroTelefono: [''],
      idRol:[1],
      empresa:[''],
      saldo:[''],
      creditos:[''],

    })
   }

  ngOnInit(): void {
  }

  enviarDatos():any{

    this.crudService.ObtenerVendedorPorCorreo2(this.formularioDeVendedores.value['idCorreo']).subscribe(respeusta =>{
      this.existeVendedor = true;
    }, err =>{
      this.existeVendedor = false;
    })
    if(this.existeVendedor == false){
      this.crudService.AgregarVendedor(this.formularioDeVendedores.value).subscribe(respuesta =>{
        this.ruteador.navigateByUrl('/listar-vendedor')
      });
    }
    else{
      console.log("Ya existe un usuario");
    }
   
   
  }
}
