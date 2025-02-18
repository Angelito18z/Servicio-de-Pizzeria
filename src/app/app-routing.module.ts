import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'gryffindor',
    loadChildren: () => import('./gryffindor/gryffindor.module').then( m => m.GryffindorPageModule)
  },
  {
    path: 'slytherin',
    loadChildren: () => import('./slytherin/slytherin.module').then( m => m.SlytherinPageModule)
  },
  {
    path: 'hufflepuff',
    loadChildren: () => import('./hufflepuff/hufflepuff.module').then( m => m.HufflepuffPageModule)
  },
  {
    path: 'ravenclaw',
    loadChildren: () => import('./ravenclaw/ravenclaw.module').then( m => m.RavenclawPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
