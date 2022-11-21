import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FeatureOverviewListComponent } from './feature-overview-list.component';
import { SharedUiModule } from 'src/app/shared/ui/shared-ui-module';

const routes: Routes = [{ path: '', component: FeatureOverviewListComponent }];

@NgModule({
  declarations: [FeatureOverviewListComponent],
  imports: [CommonModule, SharedUiModule, RouterModule.forChild(routes)],
})
export class FeatureOverviewListModule {}
