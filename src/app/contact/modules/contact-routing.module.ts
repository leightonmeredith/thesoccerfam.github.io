import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact.component';
import { ContactGuard } from './contact.guard';

const routes: Routes = [
  {
    path: 'contact',
    canActivate: [ContactGuard],
    component: ContactComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
