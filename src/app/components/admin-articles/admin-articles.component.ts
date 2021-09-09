import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent implements OnInit {
  articles: any;
  id: any;
  constructor(private artcileServices: ArticleService,
    private activateRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.artcileServices.getAllArticles().subscribe(
      (data) => {
        this.articles = data.allArticles;
      }
    )
  }
  deletearticles(id: number) {
    this.artcileServices.deleteArticle(id).subscribe(
      (data) => {
        console.log('result', data.message);
        this.artcileServices.getAllArticles().subscribe(
          (data) => {
            this.articles = data.allArticles;
          }
        )

      }
    )
  }
  goToEdit(id) {
 this.router.navigate([`editArticle/${id}`]);
  }
  goToDisplay(id){
    this.router.navigate([`displayArticle/${id}`]);
  }
}
