import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HufflepuffPage } from './hufflepuff.page';

const routes: Routes = [
  {
    path: '',
    component: HufflepuffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HufflepuffPageRoutingModule {}
