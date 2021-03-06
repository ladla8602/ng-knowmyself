import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article/article.service';
import { FavoriteProvider } from '../providers/bookmark_index';
import { RecentProvider } from '../providers/recent_index';

import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AdmobFreeService } from '../services/admobfree.service';

@Component({
  selector: 'app-actionsheet-simple',
  templateUrl: './actionsheet-simple.page.html',
  styleUrls: ['./actionsheet-simple.page.scss'],
})
export class ActionsheetSimplePage implements OnInit {
  public index_id: string;
  public cat_id: string;
  public articles: any = [];
  public staticarticles: any = [];
  public index: string;
  public isFavorite = false;
  public msg: any;
  public shareArticle: string;
  public randomNumber: number;

  //action sheet package declaration
  constructor(
    private platform: Platform,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    public favoriteProvider: FavoriteProvider,
    public recentProvider: RecentProvider,
    public toast: ToastController,
    private socialSharing: SocialSharing,
    private admobFreeService: AdmobFreeService
    ) { }

  ngOnInit() {
    this.index_id = this.route.snapshot.paramMap.get('index_id');
    this.initializeArticle(this.index_id);
    this.favoriteProvider.isFavorite(this.index_id).then(isFav => {
        this.isFavorite = isFav;
      });
  }
  ionViewDidEnter() {
    this.randomNumber = this.getRandomInt(3);
    console.log(this.randomNumber);
    if(this.randomNumber === 0){
        this.admobFreeService.InterstitialAd();
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  initializeArticle(id){
    this.articleService.getArticle(id).subscribe(res => {
      if(res && res.length){
        this.articles = res;
        this.shareArticle = res[0].article;
        this.staticarticles = res;
        this.index = res[0].index;   //assigning article name
        this.cat_id = res[0].category_id;
        //storing recently views articles index id
        this.recentProvider.favoriteFilm(this.index_id);
      }else{
          this.articles = [];
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
    // stripHtml(html){
    //     // Create a new div element
    //     var temporalDivElement = document.createElement("div");
    //     // Set the HTML content with the providen
    //     temporalDivElement.innerHTML = html;
    //     // Retrieve the text property of the element (cross-browser support)
    //     return temporalDivElement.textContent || temporalDivElement.innerText || "";
    // }
  compilemsg():string {
    var msg = this.index + "\n" + this.shareArticle ;
    return msg.concat(" \n Sent from 2KnowMySelf App! - https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself");
  }
    // Share Options
    share() {
        this.platform.ready().then(async () => {
          await this.socialSharing.share('2KnowMySelf Psychology - The Article Pocket Book - Download at https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself').then(() => {
          }).catch((err) => {
            console.log(err)
          });
        });
      }
    
      // Share Via Email
      shareViaEmail() {
        this.socialSharing.canShareViaEmail().then(() => {
          this.platform.ready().then(() => {
              this.msg = this.compilemsg();
            this.socialSharing.shareViaEmail('Download Awesome Psychology Article Pocket App \n' + this.msg, 'https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself', [])
          });
        }).catch((err) => {
          alert('Email not available')
        })
      }
    
      // Share Via WhatsApp
      shareViaWhatsapp() {
        this.msg = this.compilemsg();
        this.socialSharing.shareViaWhatsApp(this.msg, null, 'https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself')
          .then(() => {
            console.log('It works');
          }).catch(() => {
            alert('WhatsApp not available')
          });
      }
    
      // Share Via Facebook
      shareViaFacebook() {
        this.msg = this.compilemsg();
        this.socialSharing.shareViaFacebook(this.msg, null, 'https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself')
          .then(() => {
            console.log('It works');
          }).catch(() => {
            alert('Facebook not available')
          });
      }
    
      // Share Via Twitter
      shareViaTwitter() {
        this.msg = this.compilemsg();
        this.socialSharing.shareViaTwitter('2KnowMySelf Psychology - The Article Pocket Book', null, 'https://play.google.com/store/apps/details?id=com.ladla8602.knowmyself')
          .then(() => {
            console.log('It works');
          }).catch(() => {
            alert('Twitter not available');
          });
      }
}
