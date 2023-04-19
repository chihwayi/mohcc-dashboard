import { Component, Input } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Warehouse } from '../models/warehouse.model';
import { Tools } from '../models/tools.model';
import { Languages } from '../models/languages.model';
import { FormBuilder } from '@angular/forms';
import { Province } from '../models/province.model';
import { ActivatedRoute } from '@angular/router';
import { AvailableTools } from '../models/available-tools.model';

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
  warehouseData!: AvailableTools[];

  id!: number;
  quantitiesAvailable!:number;

  constructor(private serviceService: ServiceService, private route: ActivatedRoute) { }

  //data = this.router.
   //state = this.router.snapshots.ParamMap.get('my_data');
  //data = this.router.

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

  private getWarehouseData(){
    this.id = Number(this.route.snapshot.paramMap.get('warehouseId'));
    this.serviceService.getAllAvailableQuantitesInWarehouseByID(this.id).subscribe(
      (data: AvailableTools[]) => {
        console.log(data);
        this.warehouseData = data;
      }
    )
  }

  private setProperties(){
     
    const jdata = JSON.stringify(this.warehouseData);
    this.quantitiesAvailable = Number(jdata[1])
  }

  ngOnInit() {
    this.getTools();
    this.getAllLanguages();
    this.getAllProvinces();
    this.getWarehouseData();
    this.setProperties();
  }

}
