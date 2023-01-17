import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { abcComponent } from '../abc/abc.component';

const routes: Routes = [{ path: 'table', component: abcComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
