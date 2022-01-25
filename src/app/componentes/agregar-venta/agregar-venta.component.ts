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
  formularioDeCuentas:FormGroup;
  formularioDeVendedor:FormGroup;
  precioProducto:any;
  cuentasDeProducto:any = [];
  idCuenta:any;
  correoVendedorEncriptado: any = localStorage.getItem('token');
  _secretKey:any = "dsfdadasd";
  bytes:any;
  correoVendedor: any;
  idVendedor:any;
  saldo:any;
  valor: boolean = false;
  cuenta: boolean = false;
  selectProducto: boolean = false;
  selectCliente: boolean = false;


  constructor(public formulario: FormBuilder, private crudService: CrudService, private ruteador: Router) { 
   
    this.formularioDeVentas= this.formulario.group({
      idProducto: [0],
      idCliente: [0],
      idCuenta: [''],
      cantidad: [''],
      precioTotal: [''],
      metodoPago:['Saldo'],
      fecha: new Date(),
      observacion: [''],
      estado: ['En trámite'],

    })

    this.formularioDeCuentas = this.formulario.group({
      estado: [''],
     })

     this.formularioDeVendedor = this.formulario.group({
      saldo: [''],
     })
  }

  ngOnInit(): void {
    if(+this.formularioDeVentas.value['idCliente'] == 0){
      console.log("Cliente true");
      this.selectCliente = true;
    }
    else if(+this.formularioDeVentas.value['idCliente'] > 0){
      console.log("Cliente false");
      this.selectCliente = false;
    }
    if(+this.formularioDeVentas.value['idProducto'] == 0){
      console.log("Cliente true");
      this.selectCliente = true;
    }
    else if(+this.formularioDeVentas.value['idProducto'] > 0){
      console.log("Cliente false");
      this.selectProducto = false;
    }
    console.log("Correo:" + this.correoVendedorEncriptado);
    this.bytes = CryptoJS.AES.decrypt(this.correoVendedorEncriptado, this._secretKey);
    if (this.bytes.toString()) {
      this.correoVendedor = JSON.parse(this.bytes.toString(CryptoJS.enc.Utf8));
      this.crudService.ObtenerVendedorPorCorreo(this.correoVendedor).subscribe(respuesta=>{
        this.idVendedor = respuesta[0]['idVendedor'];
        this.saldo = respuesta[0]['saldo'];
       
      });
    }
    console.log();
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
    console.log("presionado");
    this.crudService.ObtenerCuentasDeProducto(this.formularioDeVentas.value['idProducto']).subscribe(respuesta =>{
      this.cuentasDeProducto = respuesta;
      this.idCuenta = this.cuentasDeProducto[Math.floor(Math.random() * (0 + (this.cuentasDeProducto.length-1) + 1)) + 0]['idCuenta'];
      this.cuenta = false;
    
    }, err =>{
      console.log(err);
      this.cuenta = true;
    })

    this.crudService.ObtenerProducto(this.formularioDeVentas.value['idProducto']).subscribe(respuesta=>{
      this.precioProducto = respuesta[0]['precio'];
      this.selectProducto = false;
    });

  
    if(+this.formularioDeVentas.value['idProducto'] == 0){
      console.log("Cliente true");
      this.selectProducto= true;
    }
    else if(+this.formularioDeVentas.value['idProducto'] > 0){
      console.log("Cliente false");
      this.selectProducto = false;
    }
  }

  clienteSeleccionado(){
    if(+this.formularioDeVentas.value['idCliente'] == 0){
      console.log("Cliente true");
      this.selectCliente = true;
    }
    else if(+this.formularioDeVentas.value['idCliente'] > 0){
      console.log("Cliente false");
      this.selectCliente = false;
    }
  }



  enviarDatos():any{
    console.log(this.saldo);
    this.formularioDeVentas.value['precioTotal'] = this.precioProducto;
    console.log(+this.formularioDeVentas.value['precioTotal']);
    console.log(+this.formularioDeVentas.value['cantidad'] * (+this.formularioDeVentas.value['precioTotal']));
    console.log("Id de la cuenta: " + this.idCuenta);

    if(+this.saldo >= (+this.formularioDeVentas.value['cantidad'] * (+this.formularioDeVentas.value['precioTotal'])) && this.idCuenta != null && this.formularioDeVentas.value['idProducto'] > 0 && this.formularioDeVentas.value['idCliente'] > 0){
      this.valor = false;
      
      this.formularioDeVendedor.value['saldo'] = (+this.saldo - (+this.formularioDeVentas.value['cantidad'] * (+this.formularioDeVentas.value['precioTotal'])));
      
      this.formularioDeVentas.value['idCuenta'] = this.idCuenta;
  
      this.formularioDeCuentas.value['estado'] = "Ocupado";

      this.formularioDeVentas.value['precioTotal'] = (+this.formularioDeVentas.value['cantidad'] * (+this.formularioDeVentas.value['precioTotal']));
  
      this.crudService.EditarEstadoDeCuenta(this.formularioDeVentas.value['idCuenta'], this.formularioDeCuentas.value).subscribe(() =>{
      });
  
    
      console.log("Me presionaste ");
      console.log(this.formularioDeVentas.value);
    
      this.crudService.EditarSaldoVendedor(this.idVendedor, this.formularioDeVendedor.value).subscribe(respuesta =>{
        console.log("Saldo modificado");
      })
     
      this.crudService.AgregarVenta(this.formularioDeVentas.value).subscribe(respuesta =>{
        console.log(respuesta);
        this.ruteador.navigateByUrl('listar-venta');
      });
    }
    else{
      this.valor = true;
    }

    


   
  }


}
