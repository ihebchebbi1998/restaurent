import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-admin-chefs',
  templateUrl: './admin-chefs.component.html',
  styleUrls: ['./admin-chefs.component.css']
})
export class AdminChefsComponent implements OnInit {

  constructor(private router:Router,
    private chefService:ChefService
    ) { }
  chefs:any =[];
  rank:string;
  ngOnInit() {
     // getter from localStorage : 
    // this.chefs=JSON.parse(localStorage.getItem("chefs")||"[]");
this.chefService.getAllChefs().subscribe(

  (data)=> {

    this.chefs=data.allChefs;
  }
);
    // this.chefs =
    
    // [ {id:1,name:"seif",speciality:"king of lablebi" ,image:"assets/img/chefs/ena.PNG"},
    // {id:1,name:"slouma ",speciality:"salé",image:"assets/img/chefs/slouma.jpg"},
    // {id:1,name:"hela",speciality:"sweet",image:"assets/img/chefs/w.jpg"},
    // {id:1,name:"shee wah",speciality:"cuisine tunisienne",image:"assets/img/chefs/ds.jpg"},];
  }
  goToDisplay(id){
this.router.navigate([`displayChef/${id}`])
 


  }
  deleteChef(id:number){
  this.chefService.deleteChef(id).subscribe(
  (data)=>{

    console.log('result',data.message);
    this.chefService.getAllChefs().subscribe(
      (data)=>{
        this.chefs = data.allChefs;
      }
    )
    
  }
    
  )
// alert('here into delete' + pos);
// this.chefs.splice(pos,1);
// localStorage.setItem("chefs",JSON.stringify(this.chefs));

  }

  goToEdit(id){
    this.router.navigate([`editChef/${id}`])



  }
  chefRank(note:number){
  let rank:string;
    if ( note>=0 &&note<5) {
      return ['red','beginner'];
      
    }
    else if (note>=5 && note<9) {
      return ['orange','intermediate'];
      
    }
    else {
      return ['green','expert'];
    }

    
  }


}
