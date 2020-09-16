import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salsas',
  templateUrl: './salsas.component.html',
  styleUrls: ['./salsas.component.css']
})
export class SalsasComponent implements OnInit {

  salsas: Array <any>=[
    {
      "Id":1,
      "Nombre":"SALSA FILETTO",
      "Descripcion": "jajan't",
      "Precio": 90,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":2,
      "Nombre":"SALSA BOLOGNESA",
      "Descripcion": "jajan't",
      "Precio": 120,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":3,
      "Nombre":"SALSA CUATRO QUESOS",
      "Descripcion": "jajan't",
      "Precio": 120,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":4,
      "Nombre":"SALSA HONGOS",
      "Descripcion": "jajan't",
      "Precio": 120,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":5,
      "Nombre":"SALSA PUERROS",
      "Descripcion": "jajan't",
      "Precio": 120,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    },
    {
      "Id":6,
      "Nombre":"QUESO RALLADO",
      "Descripcion": "jajan't",
      "Precio": 80,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
