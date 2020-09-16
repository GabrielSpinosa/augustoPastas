import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'

@Component({
  selector: 'app-pastas',
  templateUrl: './pastas.component.html',
  styleUrls: ['./pastas.component.css']
})
export class PastasComponent implements OnInit {

  platos: Array <any>=[
    {
      "Id":1,
      "Nombre":"SPAGHETTI AL HUEVO:  $200",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 200,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":2,
      "Nombre":"TAGLIATELLE AL HUEVO:  $200",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 200,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":3,
      "Nombre":"FETUCCINI VERDE:  $200",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 200,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":4,
      "Nombre":"ÑOQUIS CLASICOS:  $230",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 230,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":5,
      "Nombre":"RAVIOLES DE CARNE Y VERDURA:  $310",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 310,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":6,
      "Nombre":"RAVIOLES DE RICOTA Y NUEZ:  $290",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 290,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":7,
      "Nombre":"SORRENTINOS DE RICOTA, JAMÓN Y NUEZ:  $330",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 330,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":8,
      "Nombre":"SORRENTINOS DE CAPRESSE:  $380",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 380,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":9,
      "Nombre":"SORRENTINOS DE MUZARELA, JAMÓN CRUDO, OLIVAS NEGRAS:  $420",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 420,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":10,
      "Nombre":"SORRENTINOS DE JAMÓN Y QUESO:  $380",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 380,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":11,
      "Nombre":"SORRENTINOS  CUATRO QUESOS:  $380",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 380,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":12,
      "Nombre":"SORRENTINOS DE HONGOS Y CASTAÑAS $450",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 450,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":13,
      "Nombre":"SORRENTINOS DE SALMÓN, RICOTA Y CAMARONES:  $490",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 490,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":14,
      "Nombre":" PANZOTTIS ROSSI:  $370",
      "Descripcion": "De calabaza queso y huevo",
      "Precio": 370,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":15,
      "Nombre":"CANELONES DE CHOCLO:  $370",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 370,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":16,
      "Nombre":"CANELONES  DE  CARNE Y  VERDURA:  $370",
      "Descripcion": "Pasta realizada a base de harina y huevo",
      "Precio": 370,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
