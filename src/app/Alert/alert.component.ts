import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit{


  public phone='+5493804662689';
  public title= 'Hola, este es un mensaje de prueba';

  ngOnInit(){
  }

}
