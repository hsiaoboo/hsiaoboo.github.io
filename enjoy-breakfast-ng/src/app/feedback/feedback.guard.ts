import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackGuard implements CanActivate {
  canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const canActivate= localStorage.getItem("uId")!=null;
    if(!canActivate){
      window.location.assign('login');  
    }
    return canActivate;
  }

  // functionName(paramter1: Class , paramter2: Class....):returnClass1 |returnClass2 {

  //   return 終點;
  // } 

}
