import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FilteredProductListComponent} from './components/filtered-product-list/filtered-product-list.component';
import {
  FilteredProductListComponentModule
} from './components/filtered-product-list/filtered-product-list.component-module';
import {CategoryServiceModule} from './services/category.service-module';
import {ProductServiceModule} from './services/product.service-module';
import {SortedProductListComponent} from "./components/sorted-product-list/sorted-product-list.component";
import {SortedProductListComponentModule} from "./components/sorted-product-list/sorted-product-list.component-module";

const routes = [
  // {
  //   path: 'products/:category',
  //   component: FilteredProductListComponent
  // }
  {
    path: 'products',
    component: FilteredProductListComponent
  }
  // {
  //   path: 'products',
  //   component: SortedProductListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SortedProductListComponentModule, CategoryServiceModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
