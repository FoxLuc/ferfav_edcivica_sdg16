import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthComponent } from './birth/birth.component';
import { BriberyComponent } from './bribery/bribery.component';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './home/home.component';
import { BirthNationComponent } from './birth/birth-nation/birth-nation.component';
import { BriberyNationComponent } from './bribery/bribery-nation/bribery-nation.component';
import { ExpenseNationComponent } from './expense/expense-nation/expense-nation.component';

const routes: Routes = [
  { path: 'birth', component: BirthComponent},
  { path: 'birth/nation/:GeoAreaName', component: BirthNationComponent},
  { path: 'bribery', component: BriberyComponent},
  { path: 'bribery/nation/:GeoAreaName', component: BriberyNationComponent},
  { path: 'expense', component: ExpenseComponent},
  { path: 'expense/nation/:GeoAreaName', component: ExpenseNationComponent},
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
