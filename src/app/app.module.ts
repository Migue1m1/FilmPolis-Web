import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AutoCompleteModule } from 'primeng/primeng';
import { Ng2CompleterModule } from "ng2-completer";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DropdownModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ActorsService } from './actors.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    Ng2CompleterModule,
    DropdownModule,
    AutoCompleteModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [ActorsService],
  bootstrap: [AppComponent],

})
export class AppModule { }
