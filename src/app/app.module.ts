import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



// Import Components
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Import Services
import { AuthServiceService } from './services/auth-service.service'; 

// Import Guards
import { AuthGuardService } from './services/guards/auth-guard.service'; 


// Import Routes
import { routes } from './app.router';

// Import Redux and Actions
import { NgRedux,NgReduxModule,DevToolsExtension } from '@angular-redux/store';

// Importing Store 
import { INITIAL_STATE,IAppState,rootReducer } from './store';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    NgReduxModule
  ],
  providers: [
    AuthServiceService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>,private devTools: DevToolsExtension) {
    let enhancers = [];
      if (devTools.isEnabled()) {
        enhancers = [ ...enhancers, devTools.enhancer() ];
      }
    ngRedux.configureStore(rootReducer,INITIAL_STATE,[],enhancers);

  }
}
