import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { AgregarVentaComponent } from './componentes/agregar-venta/agregar-venta.component';
import { EditarVentaComponent } from './componentes/editar-venta/editar-venta.component';
import { ListarVentaComponent } from './componentes/listar-venta/listar-venta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {path: 'editar-venta/:id', component: EditarVentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
