import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Pedido, PizzeriaService } from 'src/app/pizzeria.service';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.scss'],
  standalone: false
})
export class PizzaMenuComponent implements OnInit {
  @Input() saborSeleccionado: string = ''; // Recibimos el sabor desde el componente padre
@Input() casa:string='';
  pedidos: Pedido[] = [];

  constructor(private pizzeria: PizzeriaService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.pedidos = this.pizzeria.getPedidos();
  }

  ionViewWillEnter() {
    this.pedidos = this.pizzeria.getPedidos();
  }

  // Actualizamos saborSeleccionado cuando se cambia el sabor
  seleccionarSabor(event: any) {
    this.saborSeleccionado = event.detail.value;
  }

  generarPedido(casa: string, pizza: string): void {
    if (!pizza) {
      this.mostrarToast("Selecciona un sabor");
      return;
    }

    
    this.pizzeria.generarPedido({ casa, pizza });
    console.log("Pedidos: ", this.pizzeria.getPedidos());
    this.pedidos = this.pizzeria.getPedidos();
  }

  getPedidosDeLaCasa() {
    return this.pedidos.filter(pedido => pedido.casa === this.casa); 
  }

  async mostrarToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,  
      position: 'bottom',
      color: 'danger', 
    });
    toast.present();
  }

}
