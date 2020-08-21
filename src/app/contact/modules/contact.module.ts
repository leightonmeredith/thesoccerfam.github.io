import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { RouterModule } from '@angular/router';
import { AngModule } from 'src/shared/ang.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    AngModule,
    ContactRoutingModule
  ],
  exports: [RouterModule]
})
export class ContactModule { }
