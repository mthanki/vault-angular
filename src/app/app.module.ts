import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddToListComponent } from './pages/add-to-list/add-to-list.component';
import { CodeListComponent } from './pages/code-list/code-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeBlockEditorComponent } from './shared/forms/code-block-editor/code-block-editor.component';
import { CodeBlockElementComponent } from './codeBlock/code-block-element/code-block-element.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToListComponent,
    CodeListComponent,
    HeaderComponent,
    CodeBlockEditorComponent,
    CodeBlockElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
