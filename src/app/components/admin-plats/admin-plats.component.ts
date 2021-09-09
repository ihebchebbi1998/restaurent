import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-admin-plats',
  templateUrl: './admin-plats.component.html',
  styleUrls: ['./admin-plats.component.css']
})
export class AdminPlatsComponent implements OnInit {
  plats:any=[];
  constructor(private router:Router,
    private platService:PlatService) { }

  ngOnInit() {


    this.platService.getAllPlats().subscribe(
      (data)=>{
        this.plats= data.allPlats
      }
    );

    // this.plats=[
    //   {id:1, name:"couscous" , price:"15",description:"poisson",image:"assets/img/food_menu/single_food_1.png"},
    //   {id:2, name:"ojja" , price:"8",description:"merguez",image:"assets/img/food_menu/single_food_1.png"},
    //   {id:3, name:"omek 7oureya" , price:"20",description:"plat tunisien",image:"assets/img/food_menu/single_food_1.png"},
    //   {id:4, name:"mloukheya" , price:"35",description:"ba9ri",image:"assets/img/food_menu/single_food_1.png"},
    //   {id:4, name:"kafteji" , price:"3",description:"frittes",image:"assets/img/food_menu/single_food_1.png"},
    // ]
    // this.plats=JSON.parse(localStorage.getItem("plats")||"[]");
   
  
  }
  goToDisplay(id:number){
    alert("display btn click"+id);
    this.router.navigate([`displayPlat/${id}`]);

  }
  deletePlatById(id:number){
    this.platService.deletePlat(id).subscribe(
    (data)=>{
      console.log('result', data.message);
      this.platService.getAllPlats().subscribe(
        (data)=>{
          this.plats =data.allPlats;
        }
      )
      
    }
    );

    // alert('here into delete ' + pos)
    // this.plats.splice(pos,1);
    // localStorage.setItem("plats",JSON.stringify(this.plats));
  }
  goToEdit(id){



    this.router.navigate([`editPlat/${id}`])
  }

}
