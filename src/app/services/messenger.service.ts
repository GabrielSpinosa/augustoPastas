import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject= new Subject()

  constructor() { }

  sendMsg(property){
    this.subject.next(property);
  }

  getMsg(){
    return this.subject.asObservable()
  }

}
