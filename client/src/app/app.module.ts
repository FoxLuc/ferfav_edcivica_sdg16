import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BriberyComponent } from './bribery/bribery.component';
import { ExpenseComponent } from './expense/expense.component';
import { BirthComponent } from './birth/birth.component';

@NgModule({
  declarations: [
    AppComponent,
    BriberyComponent,
    ExpenseComponent,
    BirthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
