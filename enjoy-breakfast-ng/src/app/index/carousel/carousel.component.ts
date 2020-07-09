import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css' , '../../app.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  images: string[] = [1, 2, 3, 4].map((n) => `img/menu${n}.jpg`);
  // tslint:disable-next-line: no-unused-expression
  ngOnInit(): void {
  }


}
