import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabFactoryComponent } from './tab-factory/tab-factory.component';
import { FlighDetailsComponent } from './fligh-details/fligh-details.component';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
const routes: Routes = [
  {
    path: 'dashboard',
    component: TabFactoryComponent,
  },
  {
    path: 'flights',
    component: FlighDetailsComponent,
  },
  {
    path: 'flights/filter',
    component: FilterComponent,
  },
  {
    path: 'flights/sort',
    component: SortComponent,
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
