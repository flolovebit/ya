import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {state: 'list'},
    loadChildren: () =>
      import('../feature-overview-list/feature-overview-list.module').then(
        (m) => m.FeatureOverviewListModule
      ),
  },
  {
    path: ':id',
    data: {state: 'detail'},
    loadChildren: () =>
      import('../feature-overview-detail/feature-overview-detail.module').then(
        (m) => m.FeatureOverviewDetailModule
      ),
  },
];

@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ShellModule {}
