import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-chef',
  templateUrl: './edit-chef.component.html',
  styleUrls: ['./edit-chef.component.css']
})
export class EditChefComponent implements OnInit {
id:any;
chef:any={};


  constructor(private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder ,private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    // this.chef =this.searchedChef();
  }
  searchedChef(){
    let chefs = JSON.parse(localStorage.getItem("chefs")||"[]");
    let searchedChef:any;

    for (let i = 0; i < chefs.length; i++) {
if (chefs[i].id==this.id) {
  searchedChef=chefs[i]
  
}      
    }
return searchedChef;


  }

  editChef(){

// let chefs= JSON.parse(localStorage.getItem("chefs")||"[]");
// for (let i = 0; i < chefs.length; i++) {
// if (chefs[i].id==this.id) {

//    chefs[i]=this.chef;
  
// }  
// }

// localStorage.setItem("chefs",JSON.stringify(chefs));
// this.router.navigate(['admin']);

 }

}
