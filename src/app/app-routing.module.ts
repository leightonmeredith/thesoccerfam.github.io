import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PodcastComponent } from './podcast/podcast.component';
import { FamilyComponent } from './family/family.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'family', component: FamilyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
