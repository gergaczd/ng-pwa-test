import {Component, OnInit} from '@angular/core';
import {routerTransition} from './animation/router';
import {Observable} from 'rxjs/internal/Observable';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {merge} from 'rxjs/internal/observable/merge';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'npt-root',
  templateUrl: './app.component.html',
  animations: [routerTransition],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private offline: Observable<any>;
  private online: Observable<any>;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.offline = fromEvent(window, 'offline');
    this.online = fromEvent(window, 'online');

    merge(this.offline, this.online).subscribe(({ type }) => {
      this.snackBar.open(type, 'OK', { duration: 3000 });
    });
  }

  public getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
