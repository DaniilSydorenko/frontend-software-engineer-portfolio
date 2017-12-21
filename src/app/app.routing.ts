import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(ROUTES);
