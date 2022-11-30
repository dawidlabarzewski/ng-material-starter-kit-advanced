import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { BeerListComponentModule } from './components/beer-list/beer-list.component-module';
import { BeerServiceModule } from './services/beer.service-module';

const routes = [
  { path: 'products', component: FilteredProductListComponent },
  { path: 'sorted-products', component: SortedProductListComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'beers-with-pagination', component: BeerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SortedProductListComponentModule, FilteredProductListComponentModule, CategoryServiceModule, ProductServiceModule, EmployeeListComponentModule, EmployeeServiceModule, BeerListComponentModule, BeerServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
