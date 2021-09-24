import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from '../layout/full-layout/full-layout.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: FullLayoutComponent,
    children: [
      { path: '', component: ProfileComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
