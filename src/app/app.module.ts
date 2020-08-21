import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { FooterComponent } from './footer/footer.component';
import { PodcastComponent } from './podcast/podcast.component';
import { FamilyComponent } from './family/family.component';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ContactModule } from './contact/modules/contact.module';
import { AngModule } from 'src/shared/ang.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TemplateComponent,
    RightNavComponent,
    LeftNavComponent,
    FooterComponent,
    PodcastComponent,
    FamilyComponent,
    LoginComponent,
    MainNavComponent
  ],
  imports: [
    AngModule,
    ContactModule,
    LayoutModule,
    AppRoutingModule
  ],
  exports: [AngModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
