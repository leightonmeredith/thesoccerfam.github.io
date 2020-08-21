import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HandSetComponent } from 'src/shared/handset.component';

// Create main-nav using ng g @angular/material:material-nav --name=main-nav

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean>;

  constructor(private handsetComponent: HandSetComponent) {
    this.isHandset$ = this.handsetComponent.isHandset$;
  }

}
