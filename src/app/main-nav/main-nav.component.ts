import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HandSetComponent } from 'src/shared/handset.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { shareReplay, map } from 'rxjs/operators';

// Create main-nav using ng g @angular/material:material-nav --name=main-nav

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  // isHandset$: Observable<boolean>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private handsetComponent: HandSetComponent) {
    // this.isHandset$ = this.handsetComponent.isHandset$;
  }

}
