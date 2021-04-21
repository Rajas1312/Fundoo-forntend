import { DisplayComponent } from './display/display.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotpassordComponent } from './forgotpassord/forgotpassord.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IsTrashComponent } from './is-trash/is-trash.component';
import { AuthGuard } from './auth-guard.service';
import { IsArchivedComponent } from './is-archived/is-archived.component';

const appRoutes: Routes = [
  {
    path: '', component: RegistrationComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpassordComponent },
  { path: 'resetpassword/:token', component: ResetComponent, },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
      { path: 'trash', component: IsTrashComponent },
      { path: 'notes', component: DisplayComponent },
      { path: 'archive', component: IsArchivedComponent }
    ]
  },
]


@NgModule({
  declarations: [],
  providers: [AuthGuard],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
