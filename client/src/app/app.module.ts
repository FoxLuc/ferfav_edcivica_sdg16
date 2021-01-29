import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BriberyComponent } from './bribery/bribery.component';
import { ExpenseComponent } from './expense/expense.component';
import { BirthComponent } from './birth/birth.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BirthNationComponent } from './birth/birth-nation/birth-nation.component';
import { BriberyNationComponent } from './bribery/bribery-nation/bribery-nation.component';
import { ExpenseNationComponent } from './expense/expense-nation/expense-nation.component';

@NgModule({
  declarations: [
    AppComponent,
    BriberyComponent,
    ExpenseComponent,
    BirthComponent,
    HomeComponent,
    BirthNationComponent,
    BriberyNationComponent,
    ExpenseNationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
