import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-chef',
  templateUrl: './signup-chef.component.html',
  styleUrls: ['./signup-chef.component.css']
})
export class SignupChefComponent implements OnInit {
  signupChefForm:FormGroup;
  constructor(private fb:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.signupChefForm=this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        pwd: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]],
        confirmPwd: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]],
        phone: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
        role:['chef']
      }
    )

  }
  signUp(){
    this.userService.signup(this.signupChefForm.value).subscribe(
      (data)=>{
        console.log('result',data.message);
        
      }
    )

  }

}
