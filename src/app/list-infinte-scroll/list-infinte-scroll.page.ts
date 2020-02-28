import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private articleService: ArticleService,
    ) { }
  //after scroll loading you can get the item pushed item mention in below code
  loadData(event) {
    setTimeout(() => {
      if(this.products.length != this.staticproducts.length){
        for(var i=10; i < this.staticproducts.length; i++){
          this.products.push(this.staticproducts[i]);
        }
      }
      event.target.complete();
    }, 500);
  }
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
        if(res.length < 10 ){
          this.scrollLength = res.length;
        }else{
          this.scrollLength = Math.round((res.length)/2);
        }
        for(var i=0; i < this.scrollLength; i++){
          this.products.push(res[i]);
        }
      this.staticproducts = res;
      this.category = res[0].category;   //assigning category name
      }
      
    });
    
  }
}
