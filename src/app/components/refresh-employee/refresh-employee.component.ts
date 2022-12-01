import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeModel} from "../../models/employee.model";

@Component({
  selector: 'app-refresh-employee',
  templateUrl: './refresh-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefreshEmployeeComponent {
  private _listSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public list$: Observable<EmployeeModel[]> = this._listSubject.asObservable().pipe(switchMap(data => this._employeeService.getAll()));

  constructor(private _employeeService: EmployeeService) {
  }

  remove(id: string): void {
    this._employeeService.delete(id).subscribe(() => this._listSubject.next());
  }
}
