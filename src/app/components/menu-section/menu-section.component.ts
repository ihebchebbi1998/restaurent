import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
@Input() menuInput:any;
  constructor() { }

  ngOnInit() {
  }

  priceColor(price:number){
    if (price>25) {
      return 'red';

      
    }
    else if (price >=15 && price<=25) {
      return 'orange';

      
    }
    else{

      return'green';
    }




  }

}

