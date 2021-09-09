import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-display-plat',
  templateUrl: './display-plat.component.html',
  styleUrls: ['./display-plat.component.css']
})
export class DisplayPlatComponent implements OnInit {
  id: any;
  plat: any ;
  constructor(private activatedRoute: ActivatedRoute,
    private platService: PlatService) { }
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

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.platService.getPlatById(this.id).subscribe(
      (data) => {
        console.log('data',data);
        
        this.plat = data.plat;
        console.log("searchedPlat", this.plat);

      }
    );
    // this.plat=this.searchedPlat();


  }

}
