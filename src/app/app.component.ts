import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Platform, Events, NavController, ModalController, MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { ArticleService } from './article/article.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['app.scss']
})
export class AppComponent {
  itemColor: any;
  public bookmarkCount: number = 0;
  public articlesCount: number = 0;
  public iconColorVar = "";
  // For Menu 1
  public appPages = [
    {
      title: 'MENU',
      url: '',
      icon: 'list'
    }
  ];

  //home list
  public homeList = [];
  //category list
  public categoryList = [];
  //Shop list
  public shopList = [];
  visibleBtn = false;
  visibleList = false;
  visibleGrid = false;
  visibleCard = false;
  visibleSlider = false;
  visibleTab = false;
  visibleSegment = false;
  visibleButton = false;
  visibleRadio = false;
  visibleCheckbox = false;
  visibleBadge = false;
  visibleToggle = false;
  visibleSearchbar = false;
  visibleFab = false;
  visibleAlert = false;
  visibleToast = false;
  visibleActionsheet = false;
  ///
  visibleHome = false;
  visibleCategory = false;
  visibleShop = false;
  public itemsHome: any = [];
  public itemsCategory: any = [];
  public itemsShop: any = [];
  ///
  public itemsList: any = [];
  public itemsGrid: any = [];
  public itemsCard: any = [];
  public itemsSlider: any = [];
  public itemsTab: any = [];
  public itemsSegment: any = [];
  public itemsButton: any = [];
  public itemsRadio: any = [];
  public itemsCheckbox: any = [];
  public itemsBadge: any = [];
  public itemsToogle: any = [];
  public itemsSearchbar: any = [];
  public itemsFab: any = [];
  public itemsAlert: any = [];
  public itemsToast: any = [];
  public itemsActionsheet: any = [];
  public itemsForm: any = [];
  ///////
  public listView = [];

  // constructor
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public modalCntrl: ModalController,
    public nav: NavController,
    private navCtrl: NavController,
    private events: Events,
    public statusbar: StatusBar,
    private elementRef: ElementRef,
    private articleService: ArticleService,
    private storage: Storage,
    private socialSharing: SocialSharing
  ) {
    //for status bar
    this.initializeApp();
    this.itemsHome = [
      { expandedHome: false },
    ];
    this.itemsCategory = [
      { expandedcategory: false },
    ];
    this.itemsShop = [
      { expandedShop: false },
    ];

    this.itemsList = [
      { expandedHelp: false },
    ];
    this.itemsGrid = [
      { expandedHelp: false },
    ];
    this.itemsCard = [
      { expandedHelp: false },
    ];
    this.itemsSlider = [
      { expandedHelp: false },
    ];
    this.itemsTab = [
      { expandedHelp: false },
    ];
    this.itemsSegment = [
      { expandedHelp: false },
    ];
    this.itemsButton = [
      { expandedHelp: false },
    ];
    this.itemsRadio = [
      { expandedHelp: false },
    ];
    this.itemsCheckbox = [
      { expandedHelp: false },
    ];
    this.itemsBadge = [
      { expandedHelp: false },
    ];
    this.itemsToogle = [
      { expandedHelp: false },
    ];
    this.itemsSearchbar = [
      { expandedHelp: false },
    ];
    this.itemsFab = [
      { expandedHelp: false },
    ];
    this.itemsAlert = [
      { expandedHelp: false },
    ];
    this.itemsToast = [
      { expandedHelp: false },
    ];
    this.itemsActionsheet = [
      { expandedHelp: false },
    ];
    this.itemsForm = [
      { expandedHelp: false },
    ];
    this.itemColor = ["#F44336"];
    this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    this.events.subscribe('icons', (data) => {
      this.iconColorVar = data;
      if (data == "autumn") {
        this.itemColor = ["#F44336"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "night") {
        this.itemColor = ["#673AB7"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "neon") {
        this.itemColor = ["#03A9F4"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "orginal") {
        this.itemColor = ["#4CAF50"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "red") {
        this.itemColor = ["#9E9E9E"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "purple") {
        this.itemColor = ["#E91E63"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "Lightblue") {
        this.itemColor = ["#3F51B5"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "Lightgreen") {
        this.itemColor = ["#00BCD4"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "Lightgray") {
        this.itemColor = ["#8BC34A"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
      else if (data == "blue") {
        this.itemColor = ["#008577"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
      }
    });
  }

  ////////
  goToList() {
    this.menuCtrl.close();
     this.navCtrl.navigateForward("latest");
  }

  ngOnInit() {
    this.menuCtrl.enable(true, 'Menu1');
    this.initializeLatestArticle();
    this.storage.get('bookmarkArticles').then(result => {
      if(result){
        this.bookmarkCount = result.length;
      }
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
    });
  }
  initializeLatestArticle(){
    this.articleService.getLatestArticle().subscribe(res => {
      if(res && res.length){
        this.articlesCount = res.length;   //assigning category name
      }
    });
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

}
