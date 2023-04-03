import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Warehouse } from '../models/warehouse.model';
import { Tools } from '../models/tools.model';
import { Languages } from '../models/languages.model';
import { FormBuilder } from '@angular/forms';
import { Province } from '../models/province.model';

@Component({
  selector: 'app-transfer-tools',
  templateUrl: './transfer-tools.component.html',
  styleUrls: ['./transfer-tools.component.css']
})
export class TransferToolsComponent {

  warehouses!: Warehouse[];
  tools!: Tools[];
  languages!: Languages[];
  provinces!: Province[];

  warehouseData: Warehouse = new Warehouse();

  constructor(private serviceService: ServiceService) { }

  private getTools() {
    this.serviceService.getAllTools().subscribe(
      (data: Tools[]) => {
        console.log(data);
        this.tools = data;
      }
    );
  }

  private getAllLanguages() {
    this.serviceService.getAllLanguages().subscribe(
      (data: Languages[]) => {
        console.log(data);
        this.languages = data;
      }
    )
  }

  private getAllProvinces(){
    this.serviceService.getAllProvinces().subscribe(
      (data: Province[]) => {
        console.log(data);
        this.provinces = data;
      }
    )
  }

  ngOnInit() {
    this.getTools();
    this.getAllLanguages();
    this.getAllProvinces();
  }

}
