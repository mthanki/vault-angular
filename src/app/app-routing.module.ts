import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AddToListComponent } from './pages/add-to-list/add-to-list.component';
import { CodeListComponent } from './pages/code-list/code-list.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: 'add-to-list', component: AddToListComponent, canActivate: [AuthGuard] },
  { path: 'code-list', component: CodeListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthenticationComponent },
  { path: 'signup', component: AuthenticationComponent },
  { path: '**', redirectTo: 'add-to-list' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
