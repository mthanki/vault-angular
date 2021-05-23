import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatChipsModule } from '@angular/material/chips';

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
    SignupEditorComponent
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
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
