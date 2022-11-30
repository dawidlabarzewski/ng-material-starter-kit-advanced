import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, switchMap} from 'rxjs';
import { PaginateModel } from '../../models/paginate.model';
import { BeerModel } from '../../models/beer.model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent {
  public pageSize: number = 5;
  public pageIndex: number = 0;

  private _paginateModelSubject: BehaviorSubject<PaginateModel> = new BehaviorSubject<PaginateModel>({
    index: this.pageIndex,
    size: this.pageSize
  });
  public paginateModel$: Observable<PaginateModel> = this._paginateModelSubject.asObservable();
  public beers$: Observable<BeerModel[]> = combineLatest([
    this.paginateModel$
  ]).pipe(
    switchMap(([model]: [PaginateModel]) => {
      return this._beerService.getList(model);
    })
  );

  handlePage(event: any) {
    this.pageSize = event?.pageSize ?? 5;
    this.pageIndex = event?.pageIndex ?? 0;

    this._paginateModelSubject.next({
      index: this.pageIndex,
      size: this.pageSize
    });
  }

  constructor(private _beerService: BeerService) {
  }
}
