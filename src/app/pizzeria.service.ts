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

  eliminarPedido(pedido: Pedido):void{
    const index = this.pedidos.indexOf(pedido);
    if(index > -1) {
      this.pedidos.splice(index,1);
    }
  }

}




export interface Pedido{
  casa: string;
  pizza:string;
}