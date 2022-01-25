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
  constructor(private activeRoute:ActivatedRoute, private crudService: CrudService, public formulario: FormBuilder, private ruteador:Router) {
    this.elID =  this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ObtenerCliente(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
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
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeClientes.value);
    this.crudService.EditarCliente(this.elID, this.formularioDeClientes.value).subscribe(() =>{
      this.ruteador.navigateByUrl('/listar-cliente')
    });
  }

}
