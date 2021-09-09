import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {
  id: any;
  plat: any = { };
  constructor(private activatedRoute: ActivatedRoute,
    private platService: PlatService,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.platService.getPlatById(this.id).subscribe(
      (data)=>{
        this.plat = data.plat;
      }
    )
    // this.plat=this.searchedPlat();
  }
  searchedPlat() {

    let plats = JSON.parse(localStorage.getItem("plats") || "[]");
    let searchedPlat: any = { };

    for (let i = 0; i < plats.length; i++) {
      if (plats[i].id == this.id) {
        searchedPlat = plats[i];
        break;
      }
    }

    return searchedPlat;

  }

  editPlat() {
    // let plats= JSON.parse(localStorage.getItem("plats")||"[]");
    // let searchedPlat = this.searchedPlat();
    // for (let i = 0; i < plats.length; i++) {
    //  if (plats[i].id=searchedPlat.id) {

    //   plats[i].name=this.plat.name;
    //   plats[i].price=this.plat.price;
    //   plats[i].description=this.plat.description;


    //  }

    // }
    // localStorage.setItem("plats",JSON.stringify(plats));

    this.platService.updatePlat(this.plat).subscribe(
      (data) => {


        console.log('result',data.message);
        this.router.navigate(['admin']);

      }
    )



  }

}
