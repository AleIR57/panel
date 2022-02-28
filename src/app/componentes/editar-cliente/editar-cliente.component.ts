import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService} from 'src/app/servicio/crud.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  formularioDeClientes:FormGroup;
  elID:any;

  correoVendedorEncriptado: any = localStorage.getItem('token');
  _secretKey:any = "dsfdadasd";
  bytes:any;
  correoVendedor: any;
  idVendedor:any;
  idRol:any;

  constructor(private activeRoute:ActivatedRoute, private crudService: CrudService, public formulario: FormBuilder, private ruteador:Router) {
    this.elID =  this.activeRoute.snapshot.paramMap.get('id');
    
    this.crudService.ObtenerCliente(this.elID).subscribe(
      respuesta=>{
        
        this.formularioDeClientes.setValue({
          nombres: respuesta[0]['nombres'],
          apellidos:  respuesta[0]['apellidos'],
          whatsapp:  respuesta[0]['whatsapp'],
          telefono: respuesta[0]['telefono'],
          correo: respuesta[0]['correo'],
          idVendedor: respuesta[0]['idVendedor'],
        });
      }
    );
    this.formularioDeClientes = this.formulario.group({
      nombres: [''],
      apellidos: [''],
      whatsapp: [''],
      telefono: [' '],
      correo:[' '],
      idVendedor:[1],

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
  
    this.crudService.EditarCliente(this.elID, this.formularioDeClientes.value).subscribe(() =>{
      if(this.idRol == 1){
        this.ruteador.navigateByUrl('/listar-cliente-colaborador')
      }
      else if(this.idRol == 2){
        this.ruteador.navigateByUrl('/listar-cliente')
      }
    });
  }

}
