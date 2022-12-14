import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../models/employee.model';
import { ApiResponseModel } from '../models/api-response.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponseModel<EmployeeModel[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map(response => response.data)
    );
  }

  delete(id: string): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  }
}
