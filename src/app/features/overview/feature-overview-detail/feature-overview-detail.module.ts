import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeatureOverviewDetailComponent } from './feature-overview-detail.component';
import { SharedUiModule } from 'src/app/shared/ui/shared-ui-module';


const routes: Routes = [
  { path: '', component: FeatureOverviewDetailComponent }
];

@NgModule({
  declarations: [
    FeatureOverviewDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedUiModule
  ]
})
export class FeatureOverviewDetailModule { }
