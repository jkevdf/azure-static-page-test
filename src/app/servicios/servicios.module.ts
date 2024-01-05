import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServicioPageComponent } from './servicio-page/servicio-page.component';
import { ServiciosPageComponent } from './servicios-page/servicios-page.component';
import { ServicioLogisticaComponent } from './servicio-logistica/servicio-logistica.component';
import { ServicioInventarioComponent } from './servicio-inventario/servicio-inventario.component';


@NgModule({
  declarations: [
    ServicioPageComponent,
    ServiciosPageComponent,
    ServicioLogisticaComponent,
    ServicioInventarioComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
