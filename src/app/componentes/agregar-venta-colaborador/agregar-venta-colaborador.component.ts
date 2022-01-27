import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-venta-colaborador',
  templateUrl: './agregar-venta-colaborador.component.html',
  styleUrls: ['./agregar-venta-colaborador.component.css']
})
export class AgregarVentaColaboradorComponent implements OnInit {

  
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
  fecha: any;
  nombreProducto: any;
  cantidad:any;
  fechaInicio:any;
  fechaExpiracion:any;
  nombreVendedor:any;
  idProducto:any;
  abrirModal:boolean = false;
  correoCuenta: any;
  contrasenaCuenta:any;
  perfilCuenta: any;
  pingCuenta:any;


  constructor(public formulario: FormBuilder, private crudService: CrudService, private ruteador: Router) { 
   
    this.formularioDeVentas= this.formulario.group({
      idProducto: [0],
      idCliente: [0],
      idCuenta: [''],
      cantidad: [''],
      precioTotal: [''],
      metodoPago:['Saldo'],
      fecha: new Date(),
      observacion: [' '],
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
        this.nombreVendedor = respuesta[0]['nombre'];

        this.crudService.ObtenerClientesDeColaborador(this.idVendedor).subscribe(respuesta=>{
          console.log(respuesta);
          this.Clientes = respuesta;
          console.log("El id Cliente:" + this.formularioDeVentas.value['idCliente']);
          
        });
       
      });
    }
    console.log();
    this.crudService.ObtenerProductos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Productos = respuesta;

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
      this.idProducto = respuesta[0]['idProducto'];
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
  
      this.fechaInicio = this.formularioDeVentas.value['fecha'];
      this.fechaExpiracion = new Date(new Date().setMonth(new Date().getMonth() + 1));
      this.cantidad = this.formularioDeVentas.value['cantidad']; 
     
      
      this.formularioDeVendedor.value['saldo'] = (+this.saldo - (+this.formularioDeVentas.value['cantidad'] * (+this.formularioDeVentas.value['precioTotal'])));
      
      this.formularioDeVentas.value['idCuenta'] = this.idCuenta;

      this.crudService.ObtenerCuenta(this.formularioDeVentas.value['idCuenta']).subscribe(respuesta =>{
        this.correoCuenta = respuesta[0]['correo'];
        this.contrasenaCuenta = respuesta[0]['contrasena'];
        this.perfilCuenta = respuesta[0]['nombrePerfil'];
        this.pingCuenta = respuesta[0]['ping'];
      })
  
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
       
      });
      this.abrirModal = true;
    }
    else{
      this.valor = true;
    }

    


   
  }

  cerrarModal(){
    this.abrirModal = false;
    this.ruteador.navigateByUrl('listar-venta');
  }

}