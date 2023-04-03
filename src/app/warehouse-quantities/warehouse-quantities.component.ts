import { Component } from '@angular/core';
import { AvailableTools } from '../models/available-tools.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-warehouse-quantities',
  templateUrl: './warehouse-quantities.component.html',
  styleUrls: ['./warehouse-quantities.component.css']
})
export class WarehouseQuantitiesComponent {

  warehouseQuantities!: AvailableTools[];

  constructor(private serviceService: ServiceService) { }

  private getAllQuantitesInWarehouse() {
    this.serviceService.getAllAvailableQuantitesInWarehouse().subscribe(
      (data: AvailableTools[]) => {
        console.log(data);
        this.warehouseQuantities = data;
      }
    );
  }

  ngOnInit() {
    this.getAllQuantitesInWarehouse() ;
  }

}
