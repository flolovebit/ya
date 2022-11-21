import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOverviewDetailComponent } from './feature-overview-detail.component';

describe('FeatureOverviewDetailComponent', () => {
  let component: FeatureOverviewDetailComponent;
  let fixture: ComponentFixture<FeatureOverviewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureOverviewDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureOverviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
