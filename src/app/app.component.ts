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
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  }
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username : suggestedName,
    //     email: 'angular@gmail.com'
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({ //setValue is also available here
        userData:{
          username: suggestedName,
          email: 'angular@gmail.com'
        }
    });
  }
  // onSubmit(form: NgForm){
  //   console.log(form);
  //   console.log('username - ',form.value.username);
  //   console.log('Hello World');
  // }
  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.questionAnswer =this.signupForm.value.questionAnswer;
    this.user.secret = this.signupForm.value.secret;
    this.user.gender = this.signupForm.value.gender;
    console.log(this.signupForm);
    this.signupForm.reset();
  }
}
