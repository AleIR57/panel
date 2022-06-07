import { CrudService } from 'src/app/servicio/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-venta',
  templateUrl: './editar-venta.component.html',
  styleUrls: ['./editar-venta.component.css']
})
export class EditarVentaComponent implements OnInit {

  formularioDeVentas:FormGroup;
  elID:any;
  numeroVenta:any;
  idProducto: any;
  idCliente: any;
  idCuenta: any;
  nombreCliente: any;
  nombreProducto: any;
  detalleVenta: any;
  metodoPago: any;
  totalCompra: any;
  cantidad: any;
  precioTotal:any;
  fecha: any;
  observacion: any;
  constructor(private activeRoute:ActivatedRoute, private crudService: CrudService, public formulario: FormBuilder, private ruteador:Router) {
    this.elID =  this.activeRoute.snapshot.paramMap.get('id');
   
    this.crudService.ObtenerVenta(this.elID).subscribe(
      respuesta=>{
       
        this.formularioDeVentas.setValue({

          idProducto:  respuesta[0]['idProducto'],
          idCliente:  respuesta[0]['idCliente'],
          idCuenta: respuesta[0]['idCuenta'],
          cantidad:  respuesta[0]['cantidad'],
          precioTotal: respuesta[0]['precioTotal'],
          metodoPago: respuesta[0]['metodoPago'],
          fecha: respuesta[0]['fecha'],
          observacion: respuesta[0]['observacion'],
          estado: respuesta[0]['estado']
        });
        this.idProducto = this.formularioDeVentas.value['idProducto'];
        this.idCliente = this.formularioDeVentas.value['idCliente'];
        this.idCuenta = this.formularioDeVentas.value['idCuenta'];
        this.detalleVenta = this.formularioDeVentas.value['detalleVenta'];
        this.metodoPago = this.formularioDeVentas.value['metodoPago'];
        this.totalCompra = this.formularioDeVentas.value['totalCompra'];
        this.cantidad = this.formularioDeVentas.value['cantidad'];
        this.precioTotal = this.formularioDeVentas.value['precioTotal'];
        this.fecha = this.formularioDeVentas.value['fecha'];
        this.observacion = this.formularioDeVentas.value['observacion'];

        this.crudService.ObtenerCliente(this.formularioDeVentas.value['idCliente']).subscribe(respuesta =>{
          this.nombreCliente = respuesta[0]['nombres'] + " " + respuesta[0]['apellidos'];
    
        })
    
        this.crudService.ObtenerProducto(this.formularioDeVentas.value['idProducto']).subscribe(respuesta =>{
          this.nombreProducto = respuesta[0]['nombre'];
          
        })
      }

    );

    this.formularioDeVentas = this.formulario.group({
      idProducto: [''],
      idCliente: [''],
      idCuenta: [''],
      cantidad: [''],
      precioTotal: [''],
      metodoPago:[''],
      fecha: [''],
      observacion: [''],
      estado: [''],
    })
   
   }

  ngOnInit(): void {
   
  }

  enviarDatos():any{

    this.formularioDeVentas.value['idProducto'] = this.idProducto;
    this.formularioDeVentas.value['idCliente'] = this.idCliente;
    this.formularioDeVentas.value['idCuenta'] = this.idCuenta;
    this.formularioDeVentas.value['cantidad'] = this.cantidad;
    this.formularioDeVentas.value['precioTotal'] = this.precioTotal;
    this.formularioDeVentas.value['fecha'] = this.fecha;
    this.formularioDeVentas.value['estado'] = 'Tramitado';
    this.formularioDeVentas.value['metodoPago'] = this.metodoPago;
    this.crudService.EditarVenta(this.elID, this.formularioDeVentas.value).subscribe(() =>{
      this.ruteador.navigateByUrl('/listar-venta')
    });
  }


}
