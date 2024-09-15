import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,
        pathMatch:'full'
    },

    {
        path:'register',
        component:RegisterComponent,
        pathMatch:'full'
    },

    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
];
