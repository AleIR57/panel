import { CrudService } from 'src/app/servicio/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.css']
})
export class EditarCuentaComponent implements OnInit {

  formularioDeCuentas:FormGroup;
  elID:any;
  fechaInicio: any;
  fechaExpiracion:any;
  estado:any;
  idProducto: any;
  constructor(private activeRoute:ActivatedRoute, private crudService: CrudService, public formulario: FormBuilder, private ruteador:Router) {
    this.elID =  this.activeRoute.snapshot.paramMap.get('id');
    
    this.crudService.ObtenerCuenta(this.elID).subscribe(
      respuesta=>{
       
        this.formularioDeCuentas.setValue({
          correo: respuesta[0]['correo'],
          contrasena:  respuesta[0]['contrasena'],
          nombrePerfil: respuesta[0]['nombrePerfil'],
          ping: respuesta[0]['ping'],
        });
        this.fechaInicio = respuesta[0]['fechaInicio'];
        this.fechaExpiracion = respuesta[0]['fechaExpiracion'];
        this.estado = respuesta[0]['estado'];
        this.idProducto = respuesta[0]['idProducto'];
      }
    );
    this.formularioDeCuentas = this.formulario.group({
      correo: [''],
      contrasena: [''],
      nombrePerfil: [''],
      ping: [''],
    })
   }

  ngOnInit(): void {
  }

  enviarDatos():any{

    this.formularioDeCuentas.value['fechaInicio'] = this.fechaInicio;
    this.formularioDeCuentas.value['fechaExpiracion'] = this.fechaExpiracion;
    this.formularioDeCuentas.value['estado'] = this.estado;
    this.formularioDeCuentas.value['idProducto'] = this.idProducto;
    this.crudService.EditarCuenta(this.elID, this.formularioDeCuentas.value).subscribe(() =>{
      this.ruteador.navigateByUrl('/listar-cuenta')
    });
  }
}
