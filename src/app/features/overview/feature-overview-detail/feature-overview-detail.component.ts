import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OverviewArticle } from '../domain/entities/overview';
import { OverviewService } from '../domain/infrastructure/overview.service';

@Component({
  selector: 'app-feature-overview-detail',
  templateUrl: './feature-overview-detail.component.html',
  styleUrls: ['./feature-overview-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureOverviewDetailComponent implements OnInit {
  detail$!:Observable<OverviewArticle>;
  id!: string;
  constructor(
    private overviewService: OverviewService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.detail$ = this.overviewService.getArticle(this.id);
  }
}
