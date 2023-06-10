import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import {routes} from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    //by default, we are using pathLocation strategy. Enable hash-based routing here:
    RouterModule.forRoot(routes, {useHash: true})
    //if we want to avoid the hash, we can do the config on the server side to be able to access routes.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
