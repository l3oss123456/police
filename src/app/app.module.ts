import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FormsManualComponent } from './forms-manual/forms-manual.component';
import { FormsMainComponent } from './forms-main/forms-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';
import { FormsNoAgentComponent } from './forms-no-agent/forms-no-agent.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    FormsManualComponent,
    FormsMainComponent,
    FormsNoAgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrintModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
