import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthComponent } from './birth/birth.component';
import { BriberyComponent } from './bribery/bribery.component';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'birth', component: BirthComponent},
  { path: 'bribery', component: BriberyComponent},
  { path: 'expense', component: ExpenseComponent},
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
