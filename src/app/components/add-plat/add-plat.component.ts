import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  //form Id
platForm:FormGroup;
//object
plat:any={};

//construction des form (creation des inputs)
  constructor(private formBuilder:FormBuilder,
    private platService: PlatService,
    private router:Router) { }

  ngOnInit() {

    this.platForm= this.formBuilder.group(
      {
        name:[''],
        price:[''],
      description:['']
      }
    );


    
  }

  addPlat(){

    this.platService.addPlat(this.plat).subscribe(
      (data)=>
      {
       console.log('result',data.message);
       
        
      }

    );
    this.router.navigate(['admin']);
//  alert("btn add clicked");
//  console.log("here plat object",this.plat);
// let idPlat=JSON.parse(localStorage.getItem("idPlat")||"1");
//  this.plat.id=idPlat;

// let plats = JSON.parse(localStorage.getItem("plats")||"[]");
// plats.push(this.plat);
// localStorage.setItem("plats",JSON.stringify(plats));
// localStorage.setItem("idPlat",idPlat+1);

  }

}
