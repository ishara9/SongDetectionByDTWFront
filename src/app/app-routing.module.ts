import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallToServiceComponent } from './call-to-service/call-to-service.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
