import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    // localStorage.removeItem('uname')
    // localStorage.removeItem('uid')
    // localStorage.removeItem('token')
  }
  title = 'enjoy-breakfast-ng';
  
}
