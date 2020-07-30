import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,FormsModule} from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit ,AfterViewInit{
  
  uEmail:any;
  uName:string;
  myForm: FormGroup;
  sendInfo :string;
  
  // uEmail=localStorage.getItem('uemail');
  // uName=localStorage.getItem('uame');
  constructor() { 
    this.myForm = new FormGroup({
      topic_input: new FormControl(),
      name_input: new FormControl(),
      mail_input: new FormControl(),
      text_input: new FormControl()
    });
  }
  ngAfterViewInit(): void {
    
  }
  
  ngOnInit(): void {
    // if(localStorage.getItem('uid')===null){
    //   window.location.assign('login');
    // };
    this.uEmail=localStorage.getItem('uEmail');
    this.uName=localStorage.getItem('uName');
    // console.log(this.uName);
    // console.log(this.uEmail);
    // console.log(localStorage.getItem('uemail'));
    this.myForm.controls['name_input'].setValue(this.uName);
    this.myForm.controls['mail_input'].setValue(this.uEmail);
    
  }
  feedback_info(){
    this.sendInfo=
      "主旨:"+this.myForm.get('topic_input').value+"\n"+
      "暱稱:"+this.myForm.get('name_input').value+"\n"+
      "信箱:"+this.myForm.get('mail_input').value+"\n"+
      "內文:"+this.myForm.get('text_input').value;
    return(this.sendInfo);
  }
  
  onSend(){
    console.log(localStorage.getItem('uEmail'));
    console.log(this.myForm.value);
    alert(this.feedback_info());

  }
}
