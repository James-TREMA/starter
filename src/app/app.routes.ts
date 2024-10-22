import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { NgifComponent } from './pages/ngif/ngif.component';
import { NgforComponent } from './pages/ngfor/ngfor.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'ngif', component: NgifComponent },
    { path: 'ngfor', component: NgforComponent },
    { path: 'about/:id', component: AboutComponent }
];