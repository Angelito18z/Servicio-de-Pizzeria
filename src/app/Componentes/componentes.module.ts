import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    PizzaMenuComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    PizzaMenuComponent,
    ModalComponent
  ]
})
export class ComponentesModule { }
