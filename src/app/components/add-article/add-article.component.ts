import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  addArticleForm: FormGroup;
  id: any;
  title: string;
  article: any = { };

  constructor(private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id', this.id);

    if (this.id) {
      this.title = ' EDIT';
   this.articleService.getArticleById(this.id).subscribe(
     (data)=>{
       this.article = data.article;
     }
   )
    }
    else {

      this.title = 'ADD';
    }

    this.addArticleForm = this.formBuilder.group({
      title: [''],
      content: [''],
      date: [''],
      category: ['']

    })
    this.articleService.getArticleById(this.id).subscribe(
      (data) => {
       this.article = data.article ;
      }
    );


  }

  addEditArticle() {
    if (this.id) {
      alert('edit article clicked');
      console.log('article',this.article);
      console.log('article fomr',this.addArticleForm.value);
      this.addArticleForm.value._id = this.id;

      
      this.articleService.editArticle(this.addArticleForm.value).subscribe(
        (data) => {
          console.log('result',data.message);

        }
      );
      this.router.navigate(['admin']);


    }
    else {
      alert('addArticle clicked');
      console.log('here artcile object details', this.addArticleForm.value);
      this.articleService.addArticle(this.addArticleForm.value).subscribe(
        (data) => {
          console.log(' result', data.message);

        }


      );
      this.router.navigate(['admin']);


    }

  }

}
