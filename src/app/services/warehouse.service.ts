import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warehouse } from '../models/warehouse.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private baseUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  getAllWarehouseTools():Observable<Warehouse[]>{
    return this.http.get<Warehouse[]>(`${this.baseUrl}${"/warehouse"}`);
  }


}
