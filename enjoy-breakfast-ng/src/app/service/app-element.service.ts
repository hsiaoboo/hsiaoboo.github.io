import { Injectable, ElementRef } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppElementService {
  public headerElement : ElementRef;

  setLoginElement(res :ElementRef){
    this.headerElement= res;
  }
  getHeaderElement():ElementRef{
    return this.headerElement;
  }
  constructor() { }
}
