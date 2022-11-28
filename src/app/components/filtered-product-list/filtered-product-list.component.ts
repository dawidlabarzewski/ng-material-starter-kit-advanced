import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._categoryService.getAll();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this._activatedRoute.params
  ]).pipe(map(([products, params]: [ProductModel[], Params]) => {
    return products.filter((product: ProductModel) => product.category === params['category']);
  } ) )

  constructor(private _categoryService: CategoryService, private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
