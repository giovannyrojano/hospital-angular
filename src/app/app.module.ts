import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultModule } from './layout/default/default.module';
import { PacientComponent } from './modules/pacient/pacient.component';
import { AddComponent } from './modules/pacient/dialog/add/add.component';
import { EditComponent } from './modules/pacient/dialog/edit/edit.component';
import { DeleteComponent } from './modules/pacient/dialog/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DefaultModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
