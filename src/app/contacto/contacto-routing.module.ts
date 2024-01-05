import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoPageComponent } from './contacto-page/contacto-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactoPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
