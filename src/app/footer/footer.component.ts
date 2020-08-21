import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HandSetComponent } from 'src/shared/handset.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isHandset$: Observable<boolean>;

  constructor(private handsetComponent: HandSetComponent) {
    this.isHandset$ = this.handsetComponent.isHandset$;
  }

  ngOnInit(): void {
  }

}
