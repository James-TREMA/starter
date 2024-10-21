import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'intro', component: IntroComponent },
    { path: 'about/:id', component: AboutComponent }
];
