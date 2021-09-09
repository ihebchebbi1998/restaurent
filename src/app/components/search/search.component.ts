import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm : FormGroup;
  searchedChefs:any;
  title:string;
  constructor(private fb:FormBuilder,
    private chefService:ChefService) { }

  ngOnInit() {
    this.searchForm=this.fb.group(
      {
        speciality:['']
      }
    )
    
    
  }
  searchBySpeciality(){
    this.chefService.searchBySpeciality(this.searchForm.value).subscribe(
      (data)=>{
        this.searchedChefs = data.serachedChefs
          //  this.title = "Our Experience Chefs in "+ data.message;

      }
    )

    console.log("here speciality", this.searchForm.value);
    console.log("searched chefs", this.searchedChefs);
      this.title = "Our Experience Chefs in "+ this.searchForm.value.speciality;
      // this.title = `Our Experience Chefs in ${this.searchForm.value}`;

  }
  
}
