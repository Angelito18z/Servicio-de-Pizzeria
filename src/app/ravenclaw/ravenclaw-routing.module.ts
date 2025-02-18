import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RavenclawPage } from './ravenclaw.page';

const routes: Routes = [
  {
    path: '',
    component: RavenclawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RavenclawPageRoutingModule {}
