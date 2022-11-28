import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import {map} from "rxjs/operators";
import {ApiResponseModel} from "../models/api-response.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponseModel<EmployeeModel[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map(response => response.data)
    );
  }
}
