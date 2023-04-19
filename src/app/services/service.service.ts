import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warehouse } from '../models/warehouse.model';
import { Tools } from '../models/tools.model';
import { Languages } from '../models/languages.model';
import { AvailableTools } from '../models/available-tools.model';
import { Province } from '../models/province.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  getAllWarehouseTools():Observable<Warehouse[]>{
    return this.http.get<Warehouse[]>(`${this.baseUrl}/${"warehouse"}`);
  }

  getAllProvinces():Observable<Province[]>{
    return this.http.get<Province[]>(`${this.baseUrl}/${"province"}`);
  }

  getAllTools():Observable<Tools[]>{
    return this.http.get<Tools[]>(`${this.baseUrl}/${"tools"}`);
  }

  getAllLanguages():Observable<Languages[]>{
    return this.http.get<Languages[]>(`${this.baseUrl}/${"language"}`);
  }

  getAllAvailableToolsInWarehouse():Observable<AvailableTools[]>{
    return this.http.get<AvailableTools[]>(`${this.baseUrl}/${"list_warehouse"}`);
  }

  getAllAvailableQuantitesInWarehouse():Observable<AvailableTools[]>{
    return this.http.get<AvailableTools[]>(`${this.baseUrl}/${"quantities"}`);
  }

  getAllAvailableQuantitesInWarehouseByID(id:number):Observable<AvailableTools[]>{
    return this.http.get<AvailableTools[]>(`${this.baseUrl}/${"quantities"}/${id}`);
  }

  addWarehouseTool(warehouse:Warehouse):Observable<Warehouse[]>{
    return this.http.post<Warehouse[]>(`${this.baseUrl}/${"add_warehouse"}`,warehouse);
  }
}
