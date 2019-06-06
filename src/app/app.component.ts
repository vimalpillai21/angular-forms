import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSelected = 'pet';
  answer = '';
  genders = ['male','female'];
  
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(form: NgForm){
  //   console.log(form);
  //   console.log('username - ',form.value.username);
  //   console.log('Hello World');
  // }
  onSubmit(){
    console.log(this.signupForm);
  }
}
