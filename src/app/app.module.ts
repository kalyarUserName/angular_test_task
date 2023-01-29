import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {RegisterComponent} from './pages/register/register.component';
import {ProfileComponent} from "./pages/profile/profile.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SecondRegisterStepComponent} from './components/second-register-step/second-register-step.component';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: 'register'},
  {
    path: "register",
    component: RegisterComponent,
  },
  {path: "profile", component: ProfileComponent},
  {path: "second", component: SecondRegisterStepComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SecondRegisterStepComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
