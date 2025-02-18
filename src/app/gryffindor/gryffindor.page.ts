import { Component, OnInit } from '@angular/core';
import { Pedido, PizzeriaService } from 'src/app/pizzeria.service';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.page.html',
  styleUrls: ['./gryffindor.page.scss'],
  standalone: false
})
export class GryffindorPage implements OnInit {
  
  casa: string = 'Gryffindor'; 
  pedidos: Pedido[] = [];

  constructor(private pizzeria: PizzeriaService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.pedidos = this.pizzeria.getPedidos();
  }

}
