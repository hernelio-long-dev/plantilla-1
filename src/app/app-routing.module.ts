import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitacionComponent } from './invitacion/invitacion.component';

const routes: Routes = [
  {
    path: '',
    component: InvitacionComponent
  },
  {
    path: ':nombre',
    component: InvitacionComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
