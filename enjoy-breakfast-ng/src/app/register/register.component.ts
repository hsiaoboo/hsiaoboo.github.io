import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerGroup: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.registerGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      birthday: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      address: new FormControl()
    });
  }
  ngOnInit(): void {
   
    
  }
  onRegister(){
    if(this.registerGroup.invalid){
      return;
    }
      console.log(
        '姓名：'+this.registerGroup.get('name').value+
        '生日：'+this.registerGroup.get('birthday').value+
        '信箱：'+this.registerGroup.get('email').value+
        '密碼：'+this.registerGroup.get('password').value+
        '地址：'+this.registerGroup.get('address').value
      );

    
    
  }
}
