import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../app.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }
  newsImages: string[] = ['news20200616', 'news20200608', 'news20200610', 'news20200123'].map((n) => `img/${n}.jpg`);
  // tslint:disable-next-line: typedef
  ngOnInit(){
  }

}
