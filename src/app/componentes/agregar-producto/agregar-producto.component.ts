import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  formularioDeProductos:FormGroup;


  constructor(public formulario: FormBuilder, private crudService: CrudService, private ruteador: Router) { 
    this.formularioDeProductos= this.formulario.group({
      nombre: [''],
      precio: [''],

    })
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
  
    this.crudService.AgregarProducto(this.formularioDeProductos.value).subscribe(respuesta =>{
      this.ruteador.navigateByUrl('/listar-producto')
    });
   
  }

}
