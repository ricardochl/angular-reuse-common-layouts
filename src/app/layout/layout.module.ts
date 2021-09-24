import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FullLayoutComponent,
    SimpleLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports:[
    FullLayoutComponent,
    SimpleLayoutComponent
  ]
})
export class LayoutModule { }
