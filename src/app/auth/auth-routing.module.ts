import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleLayoutComponent } from '../layout/simple-layout/simple-layout.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'login',
    component: SimpleLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
