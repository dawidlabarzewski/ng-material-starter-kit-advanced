import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, Subject, combineLatest, of, startWith, take, first} from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeAgeFilterModel } from '../../models/employee-age-filter.model';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  private _salarySortSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public salarySort$: Observable<string> = this._salarySortSubject.asObservable();
  public sorts: Observable<string[]> = of(['asc', 'desc']);

  private ageFilters: EmployeeAgeFilterModel[] = [
    {
      name: 'All',
      min: null,
      max: null
    },
    {
      name: '0-20',
      min: 0,
      max: 20
    },
    {
      name: '21-30',
      min: 21,
      max: 30
    },
    {
      name: '31-40',
      min: 31,
      max: 40
    },
    {
      name: '41-50',
      min: 41,
      max: 50
    },
    {
      name: '51-100',
      min: 51,
      max: 100
    }
  ];
  public filters: Observable<EmployeeAgeFilterModel[]> = of(this.ageFilters);
  private _ageFilterSubject: BehaviorSubject<EmployeeAgeFilterModel> = new BehaviorSubject<EmployeeAgeFilterModel>(
    this.ageFilters[0]
  );
  public ageFilter$: Observable<EmployeeAgeFilterModel> = this._ageFilterSubject.asObservable();

  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.salarySort$,
    this.ageFilter$
  ]).pipe(
    map(([employees, salarySort, ageFilter]: [EmployeeModel[], string, EmployeeAgeFilterModel]) => {
      return employees.filter(employee => {
        if (ageFilter.min === null || ageFilter.max === null) return true;
        return +employee.employee_age >= ageFilter.min && +employee.employee_age <= ageFilter.max;
      })
      .sort((a, b) => {
        if (a.employee_salary > b.employee_salary) return salarySort === 'asc' ? 1 : -1;
        if (a.employee_salary < b.employee_salary) return salarySort === 'asc' ? -1 : 1;
        return 0;
      });
    })
  );

  constructor(private _employeeService: EmployeeService) {
  }

  sortSalary(sort: string): void {
    this._salarySortSubject.next(sort);
  }

  filterAge(filterModel: EmployeeAgeFilterModel): void {
    this._ageFilterSubject.next(filterModel);
  }
}
