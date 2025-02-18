import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GryffindorPage } from './gryffindor.page';

const routes: Routes = [
  {
    path: '',
    component: GryffindorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GryffindorPageRoutingModule {}
