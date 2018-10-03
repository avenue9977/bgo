import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './main-wrapper/home/home.component';
import { MyGridComponent } from './main-wrapper/my-grid/my-grid.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: MyGridComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {}
