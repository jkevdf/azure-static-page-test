import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosPageComponent } from './servicios-page/servicios-page.component';
import { ServicioInventarioComponent } from './servicio-inventario/servicio-inventario.component';
import { ServicioLogisticaComponent } from './servicio-logistica/servicio-logistica.component';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPageComponent,
    children: [
      { path: 'inventario', component: ServicioInventarioComponent },
      { path: 'logistica', component: ServicioLogisticaComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
