import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Cliente, Producto, Venta, Cuenta, Vendedor } from './Modelos';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string= "http://localhost/crudPanel/clientes/"
  API2: string = "http://localhost/crudPanel/productos/"
  API3: string = "http://localhost/crudPanel/ventas/"
  API4: string = "http://localhost/crudPanel/cuentas/"
  API5: string = "http://localhost/crudPanel/vendedores/"
  API6: string = "http://localhost/crudPanel/roles/"

  constructor(private clienteHttp: HttpClient) { }

  AgregarCliente(datosCliente:Cliente):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosCliente)
  }

  ObtenerClientes(){
    return this.clienteHttp.get(this.API)
  }

  BorrarCliente(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id)
  }

  ObtenerCliente(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id)
  }

  EditarCliente(id:any, datosCliente:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosCliente)
  }

  AgregarProducto(datosProducto:Producto):Observable<any>{
    return this.clienteHttp.post(this.API2+"?insertar=1",datosProducto)
  }

  ObtenerProductos(){
    return this.clienteHttp.get(this.API2)
  }

  BorrarProducto(id:any):Observable<any>{
    return this.clienteHttp.get(this.API2+"?borrar="+id)
  }

  ObtenerProducto(id:any):Observable<any>{
    return this.clienteHttp.get(this.API2+"?consultar="+id)
  }

  EditarProducto(id:any, datosProducto:any):Observable<any>{
    return this.clienteHttp.post(this.API2+"?actualizar="+id,datosProducto)
  }

  AgregarVenta(datosVenta:Venta):Observable<any>{
    return this.clienteHttp.post(this.API3+"?insertar=1",datosVenta)
  }

  ObtenerVentas(){
    return this.clienteHttp.get(this.API3)
  }

  BorrarVenta(id:any):Observable<any>{
    return this.clienteHttp.get(this.API3+"?borrar="+id)
  }

  ObtenerVenta(id:any):Observable<any>{
    return this.clienteHttp.get(this.API3+"?consultar="+id)
  }

  EditarVenta(id:any, datosVenta:any):Observable<any>{
    return this.clienteHttp.post(this.API3+"?actualizar="+id,datosVenta)
  }

  AgregarCuenta(datosCuenta:Cuenta):Observable<any>{
    return this.clienteHttp.post(this.API4+"?insertar=1",datosCuenta)
  }

  ObtenerCuentas(){
    return this.clienteHttp.get(this.API4)
  }

  ObtenerCuentasDeProducto(id:any){
    return this.clienteHttp.get(this.API4+"?consultar2="+id)
  }

  BorrarCuenta(id:any):Observable<any>{
    return this.clienteHttp.get(this.API4+"?borrar="+id)
  }

  ObtenerCuenta(id:any):Observable<any>{
    return this.clienteHttp.get(this.API4+"?consultar="+id)
  }

  EditarCuenta(id:any, datosCuenta:any):Observable<any>{
    return this.clienteHttp.post(this.API4+"?actualizar="+id,datosCuenta)
  }

  EditarEstadoDeCuenta(id:any, datosCuenta:any):Observable<any>{
    return this.clienteHttp.post(this.API4+"?actualizarEstado="+id,datosCuenta)
  }

  AgregarVendedor(datosVendedor:Vendedor):Observable<any>{
    return this.clienteHttp.post(this.API5+"?insertar=1",datosVendedor)
  }

  ObtenerVendedores(){
    return this.clienteHttp.get(this.API5)
  }

  BorrarVendedor(id:any):Observable<any>{
    return this.clienteHttp.get(this.API5+"?borrar="+id)
  }

  ObtenerVendedor(id:any):Observable<any>{
    return this.clienteHttp.get(this.API5+"?consultar="+id)
  }

  EditarVendedor(id:any, datosVendedor:any):Observable<any>{
    return this.clienteHttp.post(this.API5+"?actualizar="+id,datosVendedor)
  }

  ObtenerRol(id:any):Observable<any>{
    return this.clienteHttp.get(this.API6+"?consultar="+id)
  }



}
