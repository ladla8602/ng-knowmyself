import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HideHeaderDirective } from '../hide-header.directive';
import { ActionsheetSimplePage } from './actionsheet-simple.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
        {
          path: '',
          component: ActionsheetSimplePage
        }
      ])
  ],
  declarations: [ActionsheetSimplePage, HideHeaderDirective]
})
export class ActionsheetSimplePageModule {}
