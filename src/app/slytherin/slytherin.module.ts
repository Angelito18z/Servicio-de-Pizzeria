import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlytherinPageRoutingModule } from './slytherin-routing.module';

import { SlytherinPage } from './slytherin.page';
import { ComponentesModule } from '../Componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlytherinPageRoutingModule,
    ComponentesModule
  ],
  declarations: [SlytherinPage]
})
export class SlytherinPageModule {}
