import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotpassordComponent } from './forgotpassord/forgotpassord.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    LoginComponent,
    ForgotpassordComponent,
    ResetComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {
        path: '', component: RegisterationComponent
      },
      { path: 'login', component: LoginComponent },
      { path: 'forgotpassword', component: ForgotpassordComponent },
      { path: 'resetpassword/:token', component: ResetComponent },
      { path: 'dashboard', component: DashboardComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
