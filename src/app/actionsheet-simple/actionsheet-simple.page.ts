import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';//actionsheet controller package

import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article/article.service';
import { Location } from '@angular/common';
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

  //action sheet package declaration
  constructor(
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    private location: Location,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.index_id = this.route.snapshot.paramMap.get('index_id');
    this.initializeArticle(this.index_id);
  }

  initializeArticle(id){
    this.articleService.getArticle(id).subscribe(res => {
      if(res && res.length){
        this.articles = res;
        this.staticarticles = res;
        this.index = res[0].index;   //assigning category name
      }
      
    });
  }
  //action sheet controller function
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  backToIndex(){
    this.location.back();
  }
}
