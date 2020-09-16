import { Component, OnInit, Input } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'


@Component({
  selector: 'app-pastas-propiedades',
  templateUrl: './pastas-propiedades.component.html',
  styleUrls: ['./pastas-propiedades.component.css']
})
export class PastasPropiedadesComponent implements OnInit {
@Input() property: any


  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.property)
  }


}
