import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBookComponent } from './components/display-book/display-book.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  { path: '', component: DisplayBookComponent },
  { path: 'add', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
