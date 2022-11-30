import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginateModel } from '../models/paginate.model';
import { BeerModel } from '../models/beer.model';

@Injectable()
export class BeerService {
  constructor(private _httpClient: HttpClient) {
  }

  getList(model: PaginateModel): Observable<BeerModel[]> {
    return this._httpClient.get<BeerModel[]>('https://api.punkapi.com/v2/beers', {
      params: {
        page: model.index + 1,
        per_page: model.size
      }
    });
  }
}
