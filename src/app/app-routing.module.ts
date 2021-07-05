import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuneGuesserBodyComponent } from './app-tune-guesser/app-tune-guesser.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
