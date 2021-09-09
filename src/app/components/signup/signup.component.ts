import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  url: string;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.url = this.router.url;
    console.log('url', this.url);

    this.signupForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        pwd: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]],
        confirmPwd: [''],
        phone: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
        // role:['client']




      },
      {
        validator: MustMatch('pwd','confirmPwd')
        }
    );


  }


  signUp() {
    // alert('signup');
    // console.log("here signup details",this.signupForm.value);
    // let idUser=JSON.parse(localStorage.getItem("idUser")||"1");
    // this.signupForm.value.id=idUser;
    // let users= JSON.parse(localStorage.getItem("users")||"[]");
    // users.push(this.signupForm.value);
    // localStorage.setItem("users",JSON.stringify(users));
    // localStorage.setItem("idUser",idUser+1);
    if (this.url == '/signup') {
      this.signupForm.value.role = 'user'

    }
    else {
      this.signupForm.value.role = 'admin'

    }


    this.userService.signup(this.signupForm.value).subscribe(

      (data) => {
        console.log('result', data.message);

      }
    );
    this.router.navigate(['']);

  }
}
