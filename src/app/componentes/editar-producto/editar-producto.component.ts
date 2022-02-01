import { CrudService } from 'src/app/servicio/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  formularioDeProductos:FormGroup;
  elID:any;
  constructor(private activeRoute:ActivatedRoute, private crudService: CrudService, public formulario: FormBuilder, private ruteador:Router) {
    this.elID =  this.activeRoute.snapshot.paramMap.get('id');

    this.crudService.ObtenerProducto(this.elID).subscribe(
      respuesta=>{
      
        this.formularioDeProductos.setValue({
          nombre: respuesta[0]['nombre'],
          precio:  respuesta[0]['precio'],
        });
      }
    );
    this.formularioDeProductos = this.formulario.group({
      nombre: [''],
      precio: [''],
    })
   }

  ngOnInit(): void {
  }

  enviarDatos():any{

    this.crudService.EditarProducto(this.elID, this.formularioDeProductos.value).subscribe(() =>{
      this.ruteador.navigateByUrl('/listar-producto')
    });
  }

}
