import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-populeritem',
  templateUrl: './populeritem.component.html',
  styleUrls: ['./populeritem.component.css']
})


export class PopuleritemComponent implements OnInit {

  menus: any = [];


  constructor() { }

  ngOnInit() {
    this.menus = [
      {id : 1 , name : "couscous" , price : 15 , catergory :"tunisien"},
      {id : 2 , name : "Plat" , price : 15 , catergory :"allmend"},
      {id : 3 , name : "salade" , price : 15 , catergory :"marocain"}

    ]
  }

}
