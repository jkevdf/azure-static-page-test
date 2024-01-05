import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientePageComponent } from './cliente-page/cliente-page.component';
import { ClientesPageComponent } from './clientes-page/clientes-page.component';


@NgModule({
  declarations: [
  
    ClientePageComponent,
       ClientesPageComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
