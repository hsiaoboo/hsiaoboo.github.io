import { Component, OnInit, ElementRef, ViewChild, OnChanges, SimpleChanges ,AfterViewInit, OnDestroy } from '@angular/core';
import { AppElementService } from '../../service/app-element.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css' ]
})
export class HeaderComponent implements OnInit ,OnChanges,AfterViewInit ,OnDestroy{
  @ViewChild("login_link")  linkRef: ElementRef;
  userId:any;
  constructor( private appElementService: AppElementService ) { }
  
  ngAfterViewInit(): void {
    this.appElementService.setLoginElement(this.linkRef);
    // alert('ngAfterViewInit');
    this.userId=localStorage.getItem('uId');
    

    if(this.userId!= null){
      // alert(this.userId);
      this.linkRef.nativeElement.innerHTML=localStorage.getItem('uName')+'您好，登出';
      this.linkRef.nativeElement.setAttribute("href","logout");

    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    alert('ngOnChanges');
  }

  ngOnInit(): void {
    

  }
  ngOnDestroy(): void {
    alert('ngOnDestroy');
  }
}
