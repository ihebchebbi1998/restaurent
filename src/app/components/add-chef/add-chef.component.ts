import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  id: any;
  chefForm: FormGroup;
  chef: any = { };
  title: string;
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private chefService: ChefService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      alert("here edit");

      this.chefService.getChefById(this.id).subscribe(

        (data) => {
          this.chef = data.chef
        }
      );
      // this.chef= this.searchChef();
      console.log("this.chef", this.chef);
      this.title = "Edit";

    }


    else {
      alert('here add ');
      this.title = "Add";

    }




    this.chefForm = this.formBuilder.group(
      {
        name: [''],
        speciality: [''],
        note: [''],



      }
    );

  }

  addEditChef() {
    if (this.id) {
      // let chefs=JSON.parse(localStorage.getItem("chefs")||"[]");
      // for (let i = 0; i < chefs.length; i++) {
      //   if (chefs[i].id ==  this.id) {
      //     chefs[i].name = this.chef.name;
      //     chefs[i].speciality = this.chef.speciality;
      //     chefs[i].note = this.chef.note;


      //   }

      // }
      // localStorage.setItem("chefs",JSON.stringify(chefs));

      this.chefService.updateChef(this.chef).subscribe(
        (data) => {

          console.log('result', data.message);
          this.router.navigate(['admin']);
        }

      )
      this.router.navigate(['admin']);


    }


    else {

      console.log("here objct chef", this.chef);
      this.chefService.addChef(this.chef).subscribe(
        (data) => {
          console.log('result', data.message);

        }


      )
      // let idChef=JSON.parse(localStorage.getItem("idChef")||"1");
      //  this.chef.id=idChef;
      //  this.chef.entryDate= new Date();

      // let chefs = JSON.parse(localStorage.getItem("chefs")||"[]");
      // chefs.push(this.chef);
      // localStorage.setItem("chefs",JSON.stringify(chefs));
      // localStorage.setItem("idChef",idChef+1);
      // alert("chef added");
    }



  }

  searchChef() {
    let chefs = JSON.parse(localStorage.getItem("chefs") || "[]");
    let searchedChef;
    for (let i = 0; i < chefs.length; i++) {
      if (chefs[i].id == this.id) {
        searchedChef = chefs[i];

      }
    }
    return searchedChef;

  }

}
