import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layouts } from '../layout/layouts';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'login',
    data: { layout: Layouts.Simple },
    children: [{ path: '', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
