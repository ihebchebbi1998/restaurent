import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-menu-to-order',
  templateUrl: './menu-to-order.component.html',
  styleUrls: ['./menu-to-order.component.css']
})
export class MenuToOrderComponent implements OnInit {
  menus: any;
  idUser:any;
  order:any;
  constructor(
    private platService: PlatService,
    private orderService :OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.platService.getAllPlats().subscribe(
      (data) => {
        this.menus = data.allPlats;
      }
    )
  }
  priceColor(price: number) {
    if (price > 25) {
      return 'red';


    }
    else if (price >= 15 && price <= 25) {
      return 'orange';


    }
    else {

      return 'green';
    }




  }

  goToReserve(id) {
  
    this.idUser = localStorage.getItem('connectedUser')||'[]';
    console.log('idUser',this.idUser);
    let order ={
      idPlat : id ,
      idUser: this.idUser
      


    }
    this.orderService.addOrder(order).subscribe(
      (data)=>
      {
       console.log('result' , data.message);
       
        
      }
    )
    
this.router.navigate(['myOrders']);
  }
}
