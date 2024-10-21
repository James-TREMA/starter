import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'ngif', component: NgifComponent },
    { path: 'ngfor', component: NgforComponent },
    { path: 'about/:id', component: AboutComponent }
];