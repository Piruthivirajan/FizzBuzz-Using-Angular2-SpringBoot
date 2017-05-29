import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FizzbuzzComponent } from './fizzbuzz.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {UserComponent} from './user.component'; 
import {RegisterComponent} from './register.component';
import {ContactComponent} from './contact.component';
import {AboutComponent} from './about.component';

const appRouts: Routes=[
    {
        path:'',
        component: HomeComponent 
    },
     {
        path:'login',
        component: UserComponent 
    },
    {
        path:'fizzbuzz',
        component: FizzbuzzComponent 
    },
    {
        path:'register',
        component: RegisterComponent 
    },
    {
        path:'contact',
        component: ContactComponent 
    },
      {
        path:'about',
        component: AboutComponent 
    }
]

export const routing: ModuleWithProviders= RouterModule.forRoot(appRouts);


