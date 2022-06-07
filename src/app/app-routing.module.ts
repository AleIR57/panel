import { ListarPantallaColaboradorComponent } from './componentes/listar-pantalla-colaborador/listar-pantalla-colaborador.component';
import { ListarClienteColaboradorComponent } from './componentes/listar-cliente-colaborador/listar-cliente-colaborador.component';
import { ListarVentaColaboradorComponent } from './componentes/listar-venta-colaborador/listar-venta-colaborador.component';
import { AgregarVentaColaboradorComponent } from './componentes/agregar-venta-colaborador/agregar-venta-colaborador.component';
import { RoleguardGuard } from './componentes/roleguard.guard';
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
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AgregarVendedorComponent } from './componentes/agregar-vendedor/agregar-vendedor.component';
import { EditarVendedorComponent } from './componentes/editar-vendedor/editar-vendedor.component';
import { ListarVendedorComponent } from './componentes/listar-vendedor/listar-vendedor.component';
import { AuthguardGuard } from './componentes/authguard.guard';
import { EditarVentaColaboradorComponent } from './componentes/editar-venta-colaborador/editar-venta-colaborador.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'listar-venta-colaborador'},
  {path: 'agregar-cliente', component: AgregarClienteComponent, canActivate: [AuthguardGuard, RoleguardGuard]},
  {path: 'listar-cliente', component: ListarClienteComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'editar-cliente/:id', component: EditarClienteComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'agregar-producto', component: AgregarProductoComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'listar-producto', component: ListarProductoComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'editar-producto/:id', component: EditarProductoComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'agregar-venta', component: AgregarVentaComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'listar-venta', component: ListarVentaComponent, canActivate: [AuthguardGuard, RoleguardGuard]},
  {path: 'editar-venta/:id', component: EditarVentaComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'agregar-cuenta', component: AgregarCuentaComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'listar-cuenta', component: ListarCuentaComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'editar-cuenta/:id', component: EditarCuentaComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'listar-pantalla', component: ListarPantallaComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'agregar-vendedor', component: AgregarVendedorComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'listar-vendedor', component: ListarVendedorComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'editar-vendedor/:id', component: EditarVendedorComponent, canActivate: [AuthguardGuard, RoleguardGuard] },
  {path: 'agregar-venta-colaborador', component: AgregarVentaColaboradorComponent, canActivate: [AuthguardGuard] },
  {path: 'listar-venta-colaborador', component: ListarVentaColaboradorComponent, canActivate: [AuthguardGuard]},
  {path: 'editar-venta-colaborador/:id', component: EditarVentaColaboradorComponent, canActivate: [AuthguardGuard] }, 
  {path: 'agregar-cliente-colaborador', component: AgregarClienteComponent, canActivate: [AuthguardGuard]},
  {path: 'listar-cliente-colaborador', component: ListarClienteColaboradorComponent, canActivate: [AuthguardGuard] },
  {path: 'editar-cliente-colaborador/:id', component: EditarClienteComponent, canActivate: [AuthguardGuard] },
  {path: 'listar-pantalla-colaborador', component: ListarPantallaColaboradorComponent, canActivate: [AuthguardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppRoutingModule { }
