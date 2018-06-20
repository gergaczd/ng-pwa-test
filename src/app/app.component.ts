import { Component } from '@angular/core';
import {routerTransition} from './animation/router';

@Component({
  selector: 'npt-root',
  templateUrl: './app.component.html',
  animations: [routerTransition],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
