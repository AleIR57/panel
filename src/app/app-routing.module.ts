import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { AgregarVentaComponent } from './componentes/agregar-venta/agregar-venta.component';
import { EditarVentaComponent } from './componentes/editar-venta/editar-venta.component';
import { ListarVentaComponent } from './componentes/listar-venta/listar-venta.component';
import { AgregarCuentaComponent } from './componentes/agregar-cuenta/agregar-cuenta.component';
import { EditarCuentaComponent } from './componentes/editar-cuenta/editar-cuenta.component';
import { ListarCuentaComponent } from './componentes/listar-cuenta/listar-cuenta.component';
import { ListarPantallaComponent } from './componentes/listar-pantalla/listar-pantalla.component';
import { LoginComponent } from './componentes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarVendedorComponent } from './componentes/agregar-vendedor/agregar-vendedor.component';
import { EditarVendedorComponent } from './componentes/editar-vendedor/editar-vendedor.component';
import { ListarVendedorComponent } from './componentes/listar-vendedor/listar-vendedor.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'agregar-cliente'},
  {path: 'agregar-cliente', component: AgregarClienteComponent},
  {path: 'listar-cliente', component: ListarClienteComponent},
  {path: 'editar-cliente/:id', component: EditarClienteComponent},
  {path: 'agregar-producto', component: AgregarProductoComponent},
  {path: 'listar-producto', component: ListarProductoComponent},
  {path: 'editar-producto/:id', component: EditarProductoComponent},
  {path: 'agregar-venta', component: AgregarVentaComponent},
  {path: 'listar-venta', component: ListarVentaComponent},
  {path: 'editar-venta/:id', component: EditarVentaComponent},
  {path: 'agregar-cuenta', component: AgregarCuentaComponent},
  {path: 'listar-cuenta', component: ListarCuentaComponent},
  {path: 'editar-cuenta/:id', component: EditarCuentaComponent},
  {path: 'listar-pantalla', component: ListarPantallaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'agregar-vendedor', component: AgregarVendedorComponent},
  {path: 'listar-vendedor', component: ListarVendedorComponent},
  {path: 'editar-vendedor/:id', component: EditarVendedorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
