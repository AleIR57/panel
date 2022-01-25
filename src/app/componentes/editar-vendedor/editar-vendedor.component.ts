import { CrudService } from 'src/app/servicio/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.css']
})
export class EditarVendedorComponent implements OnInit {

  formularioDeVendedores:FormGroup;
  elID:any;
  idRol:any;
  existeVendedor: boolean = true;
  constructor(private activeRoute:ActivatedRoute, private crudService: CrudService, public formulario: FormBuilder, private ruteador:Router) {
    this.elID =  this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ObtenerVendedor(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeVendedores.setValue({
          nombre: respuesta[0]['nombre'],
          nombreUsuario:  respuesta[0]['nombreUsuario'],
          correo:  respuesta[0]['correo'],
          contrasena: respuesta[0]['contrasena'],
          numeroTelefono: respuesta[0]['numeroTelefono'],
          idRol: respuesta[0]['idRol'],
          empresa: respuesta[0]['empresa'],
          saldo: respuesta[0]['saldo'],
          creditos: respuesta[0]['creditos']
        });
        this.idRol = respuesta[0]['idRol'];
      }
    );
    this.formularioDeVendedores = this.formulario.group({
      nombre: [''],
      nombreUsuario: [''],
      correo: [''],
      contrasena: [''],
      numeroTelefono:[''],
      idRol: [''],
      empresa: [''],
      saldo: [''],
      creditos: [''],

    })
   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeVendedores.value);
    
    this.crudService.ObtenerVendedorPorCorreo(this.formularioDeVendedores.value['idCorreo']).subscribe(respeusta =>{
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
   
    if(this.existeVendedor == false){
    this.formularioDeVendedores.value['idRol'] = this.idRol;
    this.crudService.EditarVendedor(this.elID, this.formularioDeVendedores.value).subscribe(() =>{
      this.ruteador.navigateByUrl('/listar-vendedor')
    });
  }
  else{
    console.log("Ya existe un usuario");
  }
  }

}
