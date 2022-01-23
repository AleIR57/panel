import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-venta',
  templateUrl: './agregar-venta.component.html',
  styleUrls: ['./agregar-venta.component.css']
})
export class AgregarVentaComponent implements OnInit {

  Productos:any;
  Clientes:any;
  formularioDeVentas:FormGroup;
  precioProducto:any;

  constructor(public formulario: FormBuilder, private crudService: CrudService, private ruteador: Router) { 
    this.formularioDeVentas= this.formulario.group({
      idProducto: [''],
      idCliente: [''],
      cantidad: [''],
      precioTotal: [''],
      metodoPago:['Saldo'],
      fecha: new Date(),
      observacion: [''],
      estado: ['En trámite'],

    })
  }

  ngOnInit(): void {
    this.crudService.ObtenerProductos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Productos = respuesta;

    });
    this.crudService.ObtenerClientes().subscribe(respuesta=>{
      console.log(respuesta);
      this.Clientes = respuesta;
      console.log("El id Cliente:" + this.formularioDeVentas.value['idCliente']);
    });

   
    
  }

  precio(){
    this.crudService.ObtenerProducto(this.formularioDeVentas.value['idProducto']).subscribe(respuesta=>{
      this.precioProducto = respuesta[0]['precio'];
    });
  }



  enviarDatos():any{

    this.formularioDeVentas.value['precioTotal'] = this.precioProducto;
    
    console.log("Me presionaste ");
    console.log(this.formularioDeVentas.value);
  
    
    this.crudService.AgregarVenta(this.formularioDeVentas.value).subscribe(respuesta =>{
      console.log(respuesta);
    });
   
  }


}
