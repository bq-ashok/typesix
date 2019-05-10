import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {NgbModule, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import {UserService } from './services/user.service';

import { MouseEventDirective } from './Directives/mouse-event.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    MouseEventDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
