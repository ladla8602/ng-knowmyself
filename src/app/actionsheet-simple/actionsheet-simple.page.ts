import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';//actionsheet controller package

import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article/article.service';
import { FavoriteProvider } from '../providers/bookmark_index';

import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-actionsheet-simple',
  templateUrl: './actionsheet-simple.page.html',
  styleUrls: ['./actionsheet-simple.page.scss'],
})
export class ActionsheetSimplePage implements OnInit {
  public index_id: string;
  public articles: any = [];
  public staticarticles: any = [];
  public index: string;
  public isFavorite = false;

  //action sheet package declaration
  constructor(
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private location: Location,
    private articleService: ArticleService,
    private storage: Storage,
    public favoriteProvider: FavoriteProvider,
    public toast: ToastController
    ) { 
    
    this.index_id = this.route.snapshot.paramMap.get('index_id');
    this.favoriteProvider.isFavorite(this.index_id).then(isFav => {
      this.isFavorite = isFav;
    })
  }

  ngOnInit() {
    this.initializeArticle(this.index_id);
  }

  initializeArticle(id){
    this.articleService.getArticle(id).subscribe(res => {
      if(res && res.length){
        this.articles = res;
        this.staticarticles = res;
        this.index = res[0].index;   //assigning article name
      }
      
    });
  }

  async favoriteArticle() {
    this.favoriteProvider.favoriteFilm(this.index_id).then(() => {
      this.isFavorite = true;
    });
    const toast = await this.toast.create({
            cssClass: 'toastTag',
            color: "success",
            showCloseButton: true,
            position: 'bottom',
            message: "Article Bookmarked Successfully.",
            closeButtonText: '| Ok',
            duration: 2000
        });
        toast.present();
  }
 
  async unfavoriteArticle() {
    this.favoriteProvider.unfavoriteFilm(this.index_id).then(() => {
      this.isFavorite = false;
    });
    const toast = await this.toast.create({
            cssClass: 'toastTag',
            color: "danger",
            showCloseButton: true,
            position: 'bottom',
            message: "Article removed from Bookmark.",
            closeButtonText: '| Ok',
            duration: 2000
        });
        toast.present();
  }

  backToIndex(){
    this.location.back();
  }
}
