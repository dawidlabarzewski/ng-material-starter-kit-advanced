import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatTableModule } from '@angular/material/table';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, MatTableModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
