import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'index/:cat_id', loadChildren: './list-infinte-scroll/list-infinte-scroll.module#ListInfinteScrollPageModule' },
  { path: 'article/:index_id', loadChildren: './actionsheet-simple/actionsheet-simple.module#ActionsheetSimplePageModule' },
  { path: 'latest', loadChildren: './card-timeline-theme-one/card-timeline-theme-one.module#CardTimelineThemeOnePageModule' },
  { path: 'privacy-policy', loadChildren: './button-text/button-text.module#ButtonTextPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
