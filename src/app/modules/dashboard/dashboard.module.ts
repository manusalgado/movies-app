import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { MenuComponent } from './components/menu/menu.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MoviesState } from './store/reducers/movies.reducer';
import { MoviesRootReducer } from './store/reducers';
import { ContentListComponent } from './components/content-list/content-list.component';
import { MoviesFacade } from './movies.facade';
import { MoviesService } from './services/movies.service';
import { MoviesEffects } from './store/effects/movies.effects';

export const DASHBOARD_TOKEN = new InjectionToken<
  ActionReducer<MoviesState>
>('Feature DashboardModule Reducers');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    StoreModule.forFeature('dashboardModule', DASHBOARD_TOKEN),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  declarations: [DashboardPage, MenuComponent, FiltersComponent, ContentListComponent],
  exports: [MenuComponent],
  providers: [{provide: DASHBOARD_TOKEN, useValue: MoviesRootReducer}, MoviesFacade, MoviesService]
})
export class DashboardPageModule {}
