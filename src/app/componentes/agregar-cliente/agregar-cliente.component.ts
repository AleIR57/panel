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
  correoVendedorEncriptado: any = localStorage.getItem('token');
  _secretKey:any = "dsfdadasd";
  bytes:any;
  correoVendedor: any;
  idVendedor:any;
  idRol:any;

  constructor(public formulario: FormBuilder, private crudService: CrudService, private ruteador: Router) {
   
    this.formularioDeClientes= this.formulario.group({
      nombres: [''],
      apellidos: [''],
      whatsapp: [''],
      telefono: [' '],
      correo:[' '],
      idVendedor:[this.idVendedor],

    })
   }

  ngOnInit(): void {
    
    this.bytes = CryptoJS.AES.decrypt(this.correoVendedorEncriptado, this._secretKey);
    if (this.bytes.toString()) {
      this.correoVendedor = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
      this.crudService.ObtenerVendedorPorCorreo(this.correoVendedor).subscribe(respuesta=>{
        this.idVendedor = respuesta[0]['idVendedor'];
        this.idRol = respuesta[0]['idRol'];
      });
    }
  }

  enviarDatos():any{
  

    this.formularioDeClientes.value['idVendedor'] = this.idVendedor;
    this.crudService.AgregarCliente(this.formularioDeClientes.value).subscribe(respuesta =>{
      if(this.idRol == 1){
        this.ruteador.navigateByUrl('/listar-cliente-colaborador')
      }
      else if(this.idRol == 2){
        this.ruteador.navigateByUrl('/listar-cliente')
      }
      
    });
   
  }

}
