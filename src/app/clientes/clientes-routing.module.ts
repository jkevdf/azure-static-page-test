import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesPageComponent } from './clientes-page/clientes-page.component';
import { ClientePageComponent } from './cliente-page/cliente-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesPageComponent,
    children: [
      { path: 'cliente', component: ClientePageComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
