import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {

pedidos: Pedido[] = [];

  constructor() { }

  generarPedido(pedido: Pedido):void{
    this.pedidos.push(pedido);
  }

  getTotalPedido():number{
    return this.pedidos.length;
  }

  getPedidos():Pedido[]{
    return this.pedidos;
  }

}


export interface Pedido{
  casa: string;
  pizza:string;
}