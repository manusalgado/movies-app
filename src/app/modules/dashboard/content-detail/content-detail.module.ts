import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentDetailPageRoutingModule } from './content-detail-routing.module';

import { ContentDetailPage } from './content-detail.page';
import { MoviesFacade } from '../movies.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentDetailPageRoutingModule
  ],
  declarations: [ContentDetailPage],
  providers: [MoviesFacade]
})
export class ContentDetailPageModule {}
