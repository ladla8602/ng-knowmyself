import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { FavoriteProvider } from './providers/bookmark_index';
import { RecentProvider } from './providers/recent_index';
import { MenuComponentComponent } from'./components/menu-component/menu-component.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleService } from './article/article.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { AdmobFreeService } from './services/admobfree.service';
@NgModule({
  declarations: [AppComponent, MenuComponentComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    ArticleService,
    FavoriteProvider,
    RecentProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,
    AdMobFree,
    AdmobFreeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
