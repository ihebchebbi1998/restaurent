import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent implements OnInit {
  article: any;
  id: any;

  constructor(private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id',this.id);
    
    this.articleService.getArticleById(this.id).subscribe(
      (data)=>{
        this.article = data.article;
        console.log('here article',this.article);
      }
    )
 
 
  }

}
