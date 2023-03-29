import { Component } from '@angular/core';
import { AvailableTools } from '../models/available-tools.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent {

  availableTools!: AvailableTools[];

  constructor(private serviceService: ServiceService) { }

  private getAllToolsInWarehouse() {
    this.serviceService.getAllAvailableToolsInWarehouse().subscribe(
      (data: AvailableTools[]) => {
        console.log(data);
        this.availableTools = data;
      }
    );
  }

  ngOnInit() {
    this.getAllToolsInWarehouse();
  }

}
