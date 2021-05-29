import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddToListComponent } from './pages/add-to-list/add-to-list.component';
import { CodeListComponent } from './pages/code-list/code-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeBlockEditorComponent } from './shared/forms/code-block-editor/code-block-editor.component';
import { CodeBlockElementComponent } from './codeBlock/code-block-element/code-block-element.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LoginEditorComponent } from './shared/forms/login-editor/login-editor.component';
import { SignupEditorComponent } from './shared/forms/signup-editor/signup-editor.component';
import { httpInterceptorProviders } from './http-interceptors';
import { PlaceholderDisplayComponent } from './shared/placeholder-display/placeholder-display.component';
import { PassworsdMatchValidatorDirective } from './shared/validators/passworsd-match-validator.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ViewPasswordDirective } from './shared/directives/view-password.directive';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToListComponent,
    CodeListComponent,
    HeaderComponent,
    CodeBlockEditorComponent,
    CodeBlockElementComponent,
    AuthenticationComponent,
    LoginEditorComponent,
    SignupEditorComponent,
    PlaceholderDisplayComponent,
    PassworsdMatchValidatorDirective,
    ViewPasswordDirective,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClipboardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MonacoEditorModule,
    MatChipsModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:10000'
    }),
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 1500,
        panelClass: ['white-snackbar']
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
