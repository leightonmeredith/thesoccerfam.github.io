import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';
import { FamilyComponent } from './family/family.component';
import { LoginComponent } from './login/login.component';
import { PodcComponent } from './podc/podcast.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'podcast', component: PodcComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
