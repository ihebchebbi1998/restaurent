import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
 chefs:any=[]
  constructor() { }

  ngOnInit() {
    this.chefs=[
      {id:1,name:"seif",speciality:"king of lablebi" ,image:"assets/img/chefs/ena.PNG"},
      {id:1,name:"slouma ",speciality:"salé",image:"assets/img/chefs/slouma.jpg"},
      {id:1,name:"hela",speciality:"sweet",image:"assets/img/chefs/w.jpg"},
      {id:1,name:"shee wah",speciality:"cuisine tunisienne",image:"assets/img/chefs/ds.jpg"},





    ]
  }

}
