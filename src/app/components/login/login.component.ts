import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom: FormGroup;
  user: any = {};
  messageErr: string;
  message: string;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginFrom = this.formBuilder.group(
      {
        email: [''],
        pwd: [''],
      }
    );

  }

  login() {
    // alert("login ");
    // console.log("here user details", this.user);
    this.userService.login(this.user).subscribe(

      (data) => {
        this.message = data.message;
        console.log('here into login', data.message);
        if (data.message == '0') {
          console.log('user not found');
          this.messageErr = 'user not found';


        }
        else if (data.message == '1') {
          console.log('wrong password ');
          this.messageErr = 'wrong password'

        }

        else {
          console.log('connected', data.connectedUser);
          localStorage.setItem('connectedUser',data.connectedUser.id);

         

          if (data.connectedUser.role == 'user') {
            console.log('welcome', data.connectedUser.fName, ' ', data.connectedUser.lName);
            this.router.navigate(['']);
            alert('hello' + data.connectedUser.fName + ' ' + data.connectedUser.lName);

          }
          else {
            console.log('welcome', data.connectedUser.fName, ' ', data.connectedUser.lName);
            this.router.navigate(['admin'])
            alert('hello ' + data.connectedUser.fName + ' ' + data.connectedUser.lName);
          }


        }


      }

    )

  }
  msgErr(message) {
    if (message == '0') {
      return ['red', 'user not found'];

    }
    else if (message == '1')  {
      return ['red', 'wrong password'];
 
    } else {
      return ['green', 'Correct User'];

    }


  }

}
