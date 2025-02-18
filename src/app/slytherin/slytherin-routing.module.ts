import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlytherinPage } from './slytherin.page';

const routes: Routes = [
  {
    path: '',
    component: SlytherinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlytherinPageRoutingModule {}
