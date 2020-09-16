import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.component.html',
  styleUrls: ['./carrito-item.component.css']
})
export class CarritoItemComponent implements OnInit {

  @Input() cartItems: any

  constructor() { }

  ngOnInit(): void {
  }

}
