import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  //variable globale de type any nommée menus:
  menus:any=[];
  x:number;
  y:"seif eddine";
  


  constructor() { }

  ngOnInit() {
  this.menus =[
 {id:1, name:"couscous" , price:"15",description:"poisson"},
 {id:2, name:"ojja" , price:"8",description:"merguez"},
 {id:3, name:"omek 7oureya" , price:"20",description:"plat tunisien"},
 {id:4, name:"mloukheya" , price:"35",description:"ba9ri"},
 {id:4, name:"kafteji" , price:"3",description:"frittes"},



  ]



  }

}
