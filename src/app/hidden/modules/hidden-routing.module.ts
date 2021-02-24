import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HiddenComponent } from '../hidden.component';

const routes: Routes = [
  {
    path: 'hidden',
    component: HiddenComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HiddenRoutingModule { }
