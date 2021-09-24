import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Layouts } from './layout/layouts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-reuse-common-layouts';
  Layouts = Layouts;
  layout: Layouts = Layouts.Simple;

  constructor(private router: Router){}
  ngOnInit(){
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.layout = data.state.root.firstChild?.data.layout;
      }
    });
  }

}
