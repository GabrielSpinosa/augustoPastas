import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {
  postres: Array <any>=[
    {
      "Id":1,
      "Nombre":"Tiramisu",
      "Descripcion": "jajan't",
      "Precio": 90,
      "Imagen": "https://i.imgur.com/FdWJF8R.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
