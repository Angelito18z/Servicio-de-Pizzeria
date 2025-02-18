import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pedido, PizzeriaService } from 'src/app/pizzeria.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone:false
})
export class ModalComponent  implements OnInit {
pedidos: Pedido[] = [];

  constructor(private modalController: ModalController,
    private pizzeria: PizzeriaService
  ) {}

  ngOnInit() {
    this.getPedidos(); 
  }
  cerrarModal() {
    this.modalController.dismiss();
  }

  getPedidos() {
    this.pedidos = this.pizzeria.getPedidos();  // Simplemente asignamos los pedidos del servicio
  }

}
