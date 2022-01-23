import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { AgregarVentaComponent } from './componentes/agregar-venta/agregar-venta.component';
import { EditarVentaComponent } from './componentes/editar-venta/editar-venta.component';
import { ListarVentaComponent } from './componentes/listar-venta/listar-venta.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    AgregarVentaComponent,
    EditarVentaComponent,
    ListarVentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
