import { AuthGuard } from './auth-guard.service';

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
import { MatToolbarModule } from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotpassordComponent } from './forgotpassord/forgotpassord.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { GetnoteComponent } from './getnote/getnote.component';
import { IconsComponent } from './icons/icons.component';
import { UpdatenoteComponent } from './updatenote/updatenote.component';
import { DeletenoteComponent } from './deletenote/deletenote.component';
import { IsTrashComponent } from './is-trash/is-trash.component';
import { DisplayComponent } from './display/display.component';
import { IsArchivedComponent } from './is-archived/is-archived.component';
import { ArchivenoteComponent } from './archivenote/archivenote.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpassordComponent,
    ResetComponent,
    DashboardComponent,
    AddnoteComponent,
    GetnoteComponent,
    IconsComponent,
    UpdatenoteComponent,
    DeletenoteComponent,
    IsTrashComponent,
    DisplayComponent,
    IsArchivedComponent,
    ArchivenoteComponent,
    CollaboratorComponent,
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
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
