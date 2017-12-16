import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';


// Importing Components
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

// Import Guards
import { AuthGuardService } from './services/guards/auth-guard.service';


export const router = [
    { path:'', redirectTo:'dashboard',pathMatch:'full' },
    { path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService] },
    { path:'signin',component:SigninComponent },
    { path:'signup',component:SignupComponent },
    { path:'**',redirectTo:'signin' }
]


export const routes:ModuleWithProviders = RouterModule.forRoot(router);
