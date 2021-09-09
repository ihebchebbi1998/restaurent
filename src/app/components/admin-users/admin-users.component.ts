import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

users:any=[];
  constructor(private router:Router,
    private userService :UserService) { }

  ngOnInit() {


this.userService.getAllUsers().subscribe(

  
    (data)=> {

    this.users = data.allUsers;

    }
  
  
)

    // this.users =[
    //   {id:1,firstName:"seif", lastName:"rezgui",email:"saif@gmail.com",tel:"97805023",address:"soliman"},
    //   {id:2,firstName:"seif", lastName:"rezgui",email:"saif@gmail.com",tel:"97805023",address:"soliman"},
    //   {id:3,firstName:"seif", lastName:"rezgui",email:"saif@gmail.com",tel:"97805023",address:"soliman"},
    //   {id:4,firstName:"seif", lastName:"rezgui",email:"saif@gmail.com",tel:"97805023",address:"soliman"},




    // ]
this.users= JSON.parse(localStorage.getItem("users")||"[]");  }
  goToDisplay(id:number){
    alert("display btn click"+id);
    this.router.navigate([`displayUser/${id}`]);

  }

  
  deleteUser(id:number){
// alert('delete ps'+pos);
// this.users.splice(pos,1);
// localStorage.setItem("users",JSON.stringify(this.users));

this.userService.deleteUser(id).subscribe(
  (data)=> {
    console.log('result',data.message);
    this.userService.getAllUsers().subscribe(
      (data)=>{
        this.users=data.allUsers;
      }
    )
    
  }
)
  }
  goToEdit(id){

this.router.navigate([`editUser/${id}`]);

  }

}
