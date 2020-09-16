import { Component, Input, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'
import { PastasPropiedadesComponent } from '../pastas-propiedades/pastas-propiedades.component';
import { PastasComponent } from '../pastas/pastas.component';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
    @Input() platos: any[];
    @Input() postres: any[];
    @Input() salsas: any[];
    cartItems=[
      {
        productName: '',
        cantidad: 0,
        prec: 0,
      }
    ]

    cartTotal=0

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((property: PastasPropiedadesComponent)=>{
      this.addProductToCart(property)
    })
  }

  addProductToCart(property: PastasPropiedadesComponent){

    this.cartItems.push({
      productName: property.Nombre,
      cantidad: 1,
      prec: property.Precio
  })
  this.cartTotal=0
  this.cartItems.forEach(item=>{
  this.cartTotal +=(item.cantidad*item.prec)
  })
}

}
