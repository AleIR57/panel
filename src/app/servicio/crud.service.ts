import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Cliente, Producto, Venta } from './Modelos';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string= "http://localhost/crudPanel/clientes/"
  API2: string = "http://localhost/crudPanel/productos/"
  API3: string = "http://localhost/crudPanel/ventas/"

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


}
