import { Component, OnInit,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder} from '@angular/forms';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { AppElementService } from "../service/app-element.service";
import { FeedbackComponent } from '../feedback/feedback.component';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { StorageService } from '../service/storage.service';
import { HeaderComponent } from '../layout/header/header.component';
import { from } from 'rxjs';
import { NotExpr } from '@angular/compiler';
import { NgbPaginationNext } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit ,AfterViewInit{
  @ViewChild("error_text")
  private errorText:ElementRef;
  
  info: any = null;
  
  myGroup: FormGroup;
  errorMsg;

  constructor(private fb: FormBuilder, private http: HttpClient  ,private storage:StorageService ,private appEleService:AppElementService) {
    this.myGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
      
   });

  }
  ngAfterViewInit() {
      // console.log(this.headerElementRef.nativeElement.outerHTML);
      
    }
  ngOnInit(): void {
  }
  

  onSubmit() {
    
    // this.http.post('http://localhost:8080/api/auth/login', this.myGroup.value).subscribe(response => console.log(response) );
    // this.doLogin().subscribe(()=>this.getInfo().subscribe(res =>this.getInfoCallBack(res)));
    this.doLogin().subscribe(
      ()=>{
        this.getInfo().subscribe(res =>this.getInfoCallBack(res));
      },
      ()=>{
        this.errorInfo();
      });

    //   function(response){
    //     // window.location.assign('feedback');
        
    //     // this.http.post('http://localhost:8080/api/auth/me', []).subscribe( response => console.log(response) );
        
    //   }
    // );

    
  }
  register(){
    window.location.assign('register');
  }
  errorInfo(){
    this.errorMsg= '信箱或密碼錯誤';
    this.errorText.nativeElement.innerHTML='信箱或密碼錯誤';
    
  }
  getInfoCallBack(res){
    
    localStorage.setItem('uName',res.name);
    localStorage.setItem('uId',res.id);
    localStorage.setItem('uEmail',res.email);
    
    // console.log(this.domLabelChild.nativeElement.innerTwxt);
    // this.domLabelChild.nativeElement=localStorage.getItem('uid');
    this.appEleService.getHeaderElement().nativeElement.innerHTML=res.name+'您好，登出';
    this.appEleService.getHeaderElement().nativeElement.setAttribute("href","logout");
    window.location.assign('');

  }

  doLogin(){
    return this.http.post('http://localhost:8080/api/auth/login', this.myGroup.value);
  }

  getInfo() {
    return this.http.post('http://localhost:8080/api/auth/me', []);
    // window.location.assign('feedback');
  }
}
