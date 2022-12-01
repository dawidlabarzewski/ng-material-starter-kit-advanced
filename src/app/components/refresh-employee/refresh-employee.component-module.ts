import { NgModule } from '@angular/core';
import { RefreshEmployeeComponent } from './refresh-employee.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [RefreshEmployeeComponent],
  providers: [],
  exports: [RefreshEmployeeComponent]
})
export class RefreshEmployeeComponentModule {
}
