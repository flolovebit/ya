import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import {
  ApiResponse,
  OverviewArticle,
  OverviewArticleState,
  Pagination,
} from '../entities/overview';
import { OverviewService } from '../infrastructure/overview.service';

@Injectable()
export class OverviewListFacade implements OnDestroy {
  constructor(private overviewService: OverviewService) {
    console.log('INIT');
  }

  _state: OverviewArticleState = {
    selected: '',
    entities: [],
    loading: false,
    error: null,
    criteria: '',
    pagination: {
      currentPage: 0,
      selectedSize: 6,
      pageSizes: [6, 12, 24, 48],
    },
  };

  private store = new BehaviorSubject<OverviewArticleState>(this._state);
  private state$ = this.store.asObservable();
  private destroyed$ = new Subject();

  // Selectors
  entities$ = this.state$.pipe(
    map((state) => state.entities),
    distinctUntilChanged()
  );
  criteria$ = this.state$.pipe(
    map((state) => state.criteria),
    distinctUntilChanged()
  );
  pagination$ = this.state$.pipe(
    map((state) => state.pagination),
    distinctUntilChanged()
  );
  selected$ = this.state$.pipe(
    map((state) => state.selected),
    distinctUntilChanged()
  );
  loading$ = this.state$.pipe(map((state) => state.loading));

  vmArticles$ = combineLatest([
    this.selected$,
    this.pagination$,
    this.criteria$,
    this.entities$,
    this.loading$,
  ]).pipe(
    map(([selected, pagination, criteria, entities, loading]) => {
      return { selected, pagination, criteria, entities, loading };
    })
  );

  load() {
    combineLatest([this.criteria$, this.pagination$])
      .pipe(
        switchMap(([criteria, pagination]) => {
          return this.getAll(criteria, pagination);
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe({
        next: (entities: OverviewArticle[]) => {
          
          this.updateState({
            ...this._state,
            entities,
            loading: true,
            selected: '',
          });
         // console.log('upodate', this._state);
        },
        error: (e) => console.error(e),
      });
  }

  reload() {
    this.updateState({ ...this._state, loading: false, entities: [] });
    this.load();
  }

  private updateState(state: OverviewArticleState) {
    this.store.next((this._state = state));
  }

  private getSeledted(id: string): Observable<OverviewArticle> {
    return this.overviewService
      .getArticle(id)
      .pipe(map((response: OverviewArticle) => response));
  }

  private getAll(
    criteria: string,
    pagination: Pagination
  ): Observable<OverviewArticle[]> {
    return this.overviewService
      .getArticles()
      .pipe(map((response: ApiResponse) => response.items));
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }
}
