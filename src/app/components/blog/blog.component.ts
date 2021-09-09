import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 blogs:any =[];
  constructor() { }

  ngOnInit() {

   this.blogs=[
     { id:1 , title:"blabla" , date:"12/12/2013", category:"foodNews" , img:"assets/img/blog/blog_1.png" ,content:"aaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
     { id:1 , title:"blabla" , date:"12/12/2013", category:"foodNews" , img:"assets/img/blog/blog_2.png",content:"aaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
     { id:1 , title:"blabla" , date:"12/12/2013", category:"foodNews" , img:"assets/img/blog/blog_3.png",content:"aaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
     { id:1 , title:"blabla" , date:"12/12/2013", category:"foodNews" , img:"assets/img/blog/blog_4.png",content:"aaaaaaaaaaaaaaaaaaaaaaaaaaaa"},



   ]
  }

}
