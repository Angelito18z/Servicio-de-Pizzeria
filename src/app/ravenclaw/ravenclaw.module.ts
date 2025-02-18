import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RavenclawPageRoutingModule } from './ravenclaw-routing.module';

import { RavenclawPage } from './ravenclaw.page';
import { ComponentesModule } from '../Componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RavenclawPageRoutingModule,
    ComponentesModule
  ],
  declarations: [RavenclawPage]
})
export class RavenclawPageModule {}
