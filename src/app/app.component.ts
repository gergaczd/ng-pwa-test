import {Component, OnInit} from '@angular/core';
import {routerTransition} from './animation/router';
import {Observable} from 'rxjs/internal/Observable';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {map} from 'rxjs/operators';
import {merge} from 'rxjs/internal/observable/merge';
import {of} from 'rxjs/internal/observable/of';

@Component({
  selector: 'npt-root',
  templateUrl: './app.component.html',
  animations: [routerTransition],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public networkState: Observable<string>;

  private offline: Observable<any>;
  private online: Observable<any>;

  constructor() {
  }

  ngOnInit() {
    this.offline = fromEvent(window, 'offline');
    this.online = fromEvent(window, 'online');

    const type = navigator.onLine ? 'online' : 'offline';
    this.networkState = merge(
      of({ type }), this.offline, this.online
    ).pipe(map(({ type }) => type));
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
