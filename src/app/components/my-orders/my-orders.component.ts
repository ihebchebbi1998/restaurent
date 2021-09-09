import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  id: any;
  plat: any;
  orders:any;
  constructor(private platService: PlatService,
    private orderService: OrderService,

    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.id =this.orders.idPlat;
  
    
      // this.platService.getPlatById(this.id).subscribe(
      //   (data)=>{
      //     this.plat =data.plat
      //   }

      // )
let idUser = localStorage.getItem('connectedUser')||'[]';
console.log('idUSer', idUser);

      this.orderService.getUserOrders(idUser).subscribe(
        (data)=>{
          
          this.orders = data.myOrders;
        console.log('myOrders',this.orders);
        
        
          
        }
      )
      // console.log('myOrders',this.orders);

// for (let i = 0; i < this.orders.length; i++) {

//   this.platService.getPlatById(this.orders[i].idPlat).subscribe(
//     (data)=>{
//       this.plat = data.plat;
//       console.log( 'here plat',this.plat);
      
//     }
//   )
  
// }
  
     
  }
  

}
