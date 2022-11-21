import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OverviewListFacade } from '../domain/application/overview-list.facade.';

@Component({
  selector: 'app-feature-overview-list',
  templateUrl: './feature-overview-list.component.html',
  styleUrls: ['./feature-overview-list.component.scss'],
  providers: [OverviewListFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureOverviewListComponent implements OnInit {
  vmArticles$ = this.overviewFacade.vmArticles$;
  loading$= this.overviewFacade.loading$;

  constructor(private overviewFacade: OverviewListFacade) {}

  ngOnInit(): void {
    this.overviewFacade.load();
  }

  update() {
    this.overviewFacade.reload();
  }
}
