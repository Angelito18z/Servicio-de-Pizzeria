import { Component, OnInit } from '@angular/core';
import { PizzeriaService } from '../pizzeria.service';
import { ModalComponent } from '../Componentes/modal/modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone:false
})
export class MenuPage implements OnInit {
  isModalOpen = false;

  totalPedidos:number = 0;

  constructor( 
    private pizzeria: PizzeriaService,
    private modalController: ModalController
    ) { }
    ngOnInit(){
      console.log("Tab1:OnInit");     
      this.totalPedidos = this.pizzeria.getTotalPedido();
     
    }

    ionViewWillEnter(){
     console.log("Tab1 ionViewEnter");   
     this.totalPedidos = this.pizzeria.getTotalPedido();
     console.log("PEDIDOS: " + this.pizzeria.getTotalPedido());
    }

    ionViewDidEnter(){
      console.log("Tab1 ionViewDidEnter");

    }

    ionViewWillLeave(){
      console.log("Tab1 ionViewWillLeave");
      
    }

    ionViewDidLeave(){
      console.log("Tab1 ionViewDidLeave");
      
    }

    ngOnDestroy(){
      console.log("Tab1: ngOnDestroy");
    }

    
    async abrirModal() {
      const modal = await this.modalController.create({
        component: ModalComponent,  // Este es el componente que deseas mostrar
      });
      return await modal.present();
    }
  

}
