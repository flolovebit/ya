import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOverviewListComponent } from './feature-overview-list.component';

describe('FeatureOverviewListComponent', () => {
  let component: FeatureOverviewListComponent;
  let fixture: ComponentFixture<FeatureOverviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureOverviewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
