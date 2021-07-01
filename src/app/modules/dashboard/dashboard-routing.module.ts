import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'content-list',
    loadChildren: () => import('./content-list/content-list.module').then( m => m.ContentListPageModule)
  },
  {
    path: 'content-detail',
    loadChildren: () => import('./content-detail/content-detail.module').then( m => m.ContentDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
