import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HomeComponent} from './home.component';
import { AppComponent } from './app.component';
import { routing} from './app.routing';
import {UserComponent} from './user.component';
import {FizzbuzzComponent} from './fizzbuzz.component';
import {RegisterComponent} from './register.component';
import {ContactComponent} from './contact.component';
import {AboutComponent} from './about.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,UserComponent,FizzbuzzComponent,RegisterComponent,ContactComponent,AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
