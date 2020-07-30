import { Component, OnInit, ViewChild } from '@angular/core';
import { HostListener, AfterViewInit, ElementRef} from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit{
  @ViewChild('comboDiv')
  private comboDiv: ElementRef;
  @ViewChild('menudiv')
  private menuDiv: ElementRef;

  infoUrl;
  para: number;
  scrHeight: any;
  scrWidth: any;
  // tslint:disable-next-line: typedef
  getPara(){
    this.infoUrl = window.location.href;
    this.para = this.infoUrl.split('#');
    return this.para[1];
  }



  @HostListener('window:resize', ['$event'])
  // tslint:disable-next-line: typedef
  getScreenSize() {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        return this.scrWidth;
  }
  // tslint:disable-next-line: typedef
  scroll(el: HTMLElement) {
    if (  this.getPara() === '2'){
      if (this.getScreenSize() < 786){
        window.scrollTo(0, 700);
      }else{
        window.scrollTo(0, 1150);
        // this.comboDiv.nativeElement.scrollTop = this.scrHeight;
      }
    }
  }
  constructor() {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void{}
  ngAfterViewInit(): void {}

}
