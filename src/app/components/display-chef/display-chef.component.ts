import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-display-chef',
  templateUrl: './display-chef.component.html',
  styleUrls: ['./display-chef.component.css']
})
export class DisplayChefComponent implements OnInit {
id:any;
chef:any;
  constructor(private activatedRote:ActivatedRoute,
    private chefService:ChefService) { }

  ngOnInit() {
    this.id=this.activatedRote.snapshot.paramMap.get('id');
    this.chefService.getChefById(this.id).subscribe(
      (data)=>{

        this.chef=data.chef;
      }


    )
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

}
