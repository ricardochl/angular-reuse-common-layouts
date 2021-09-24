import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Layouts } from './layout/layouts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-reuse-common-layouts';

  Layouts = Layouts;
  layout: Layouts = Layouts.Full;

  constructor(private router: Router, private activateRouter : ActivatedRoute){

  }

  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.layout = this.activateRouter.firstChild?.snapshot.data.layout;
      }
    })
  }
}
