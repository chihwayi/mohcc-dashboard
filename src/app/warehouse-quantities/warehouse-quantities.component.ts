import { Component } from '@angular/core';
import { AvailableTools } from '../models/available-tools.model';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-quantities',
  templateUrl: './warehouse-quantities.component.html',
  styleUrls: ['./warehouse-quantities.component.css']
})
export class WarehouseQuantitiesComponent {

  warehouseQuantities!: AvailableTools[];

  constructor(private serviceService: ServiceService, private router: Router) { }

  private getAllQuantitesInWarehouse() {
    this.serviceService.getAllAvailableQuantitesInWarehouse().subscribe(
      (data: AvailableTools[]) => {
        console.log(data);
        this.warehouseQuantities = data;
      }
    );
  }

  public toProvince(id:number){
    /*const data = this.warehouseQuantities.find(row => row.warehouseId=== id);
    this.router.navigate(['/transfer', {my_data:JSON.stringify(
      this.warehouseQuantities.find(row => row.warehouseId=== id)
    )}])
    */
    this.router.navigate(['/transfer',id]);
  }

  public toWarehouseAdd(){
    this.router.navigate(['/register-tool'])
  }

  ngOnInit() {
    this.getAllQuantitesInWarehouse() ;
  }

}
