import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../article/article.service';
@Component({
  selector: 'app-card-timeline-theme-one',
  templateUrl: './card-timeline-theme-one.page.html',
  styleUrls: ['./card-timeline-theme-one.page.scss'],
})
export class CardTimelineThemeOnePage implements OnInit {
  public latest: any = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.initializeArticle();
  }

  initializeArticle(){
    this.articleService.getLatestArticle().subscribe(res => {
      if(res && res.length){
        this.latest = res; 
      }
    });
  }

}