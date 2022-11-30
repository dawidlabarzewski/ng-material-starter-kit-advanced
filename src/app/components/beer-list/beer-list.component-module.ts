import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BeerListComponent } from './beer-list.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatPaginatorModule],
  declarations: [BeerListComponent],
  providers: [],
  exports: [BeerListComponent]
})
export class BeerListComponentModule {
}
