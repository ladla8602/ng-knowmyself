import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { ArticleService } from '../article/article.service';

@Component({
  selector: 'app-list-infinte-scroll',
  templateUrl: './list-infinte-scroll.page.html',
  styleUrls: ['./list-infinte-scroll.page.scss'],
})
export class ListInfinteScrollPage implements OnInit, OnDestroy {
  public cat_id: string;
  public products: any = [];
  public staticproducts: any = [];
  public category: string;
  public scrollLength: number = 5;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    public toast: ToastController
    ) { }
  
  ngOnInit() {
    this.cat_id = this.route.snapshot.paramMap.get('cat_id');
    this.initializeIndex(this.cat_id);
  }

  ngOnDestroy() {
    this.products = [];
  }

  initializeIndex(id){
    this.articleService.getIndex(id).subscribe(res => {
      if(res && res.length){
        this.products = res;
        this.staticproducts = res;
        this.category = res[0].category;   //assigning category name
      }
      
    });
  }
  resetProduct(){
    this.products = this.staticproducts;
  }
  searchIndex(ev){
    // Reset items back to all of the items
        this.resetProduct();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.products = this.products.filter((item) => {
                return (item.index.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
  }

      async hasArticle(){
        const toast = await this.toast.create({
            cssClass: 'toastTag',
            color: "danger",
            showCloseButton: true,
            position: 'bottom',
            message: "Article will be available soon! Stay Tuned",
            closeButtonText: '| Ok',
            duration: 2000
        });
        toast.present();
    }
}
