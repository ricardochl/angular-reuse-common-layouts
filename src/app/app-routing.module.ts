import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { Layouts } from './layout/layouts';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    data: { layout: Layouts.Full },
    children: [
      { path: 'dashboard', loadChildren: () => DashboardModule },
      { path: 'profile', loadChildren: () => ProfileModule },
    ],
  },
  {
    path: '',
    data: { layout: Layouts.Simple },
    children: [{ path: 'login', loadChildren: () => AuthModule }],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
