import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ListInfinteScrollPage } from './list-infinte-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
        {
          path: '',
          component: ListInfinteScrollPage
        }
      ])
  ],
  declarations: [ListInfinteScrollPage]
})
export class ListInfinteScrollPageModule {}
