import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentListPageRoutingModule } from './content-list-routing.module';

import { ContentListPage } from './content-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentListPageRoutingModule
  ],
  declarations: [ContentListPage]
})
export class ContentListPageModule {}
