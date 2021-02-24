import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiddenRoutingModule } from './hidden-routing.module';
import { RouterModule } from '@angular/router';
import { AngModule } from 'src/shared/ang.module';
import { HiddenComponent } from '../hidden.component';



@NgModule({
  declarations: [
    HiddenComponent
  ],
  imports: [
    CommonModule,
    AngModule,
    HiddenRoutingModule
  ],
  exports: [RouterModule]
})
export class HiddenModule { }
