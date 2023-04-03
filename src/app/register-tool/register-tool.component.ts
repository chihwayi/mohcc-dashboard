import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Warehouse } from '../models/warehouse.model';
import { Tools } from '../models/tools.model';
import { Languages } from '../models/languages.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-tool',
  templateUrl: './register-tool.component.html',
  styleUrls: ['./register-tool.component.css']
})
export class RegisterToolComponent {

  warehouses!: Warehouse[];
  tools!: Tools[];
  languages!: Languages[];

  warehouseData: Warehouse = new Warehouse();

  selectedTool = '';

  constructor(private serviceService: ServiceService, private formBuilder: FormBuilder) { }

  toolsForm = this.formBuilder.group({
    toolId: '',
    languageId: '',
    quantity: '',
    version: '',
    dateEntered: ''
  });

  getToolId(){
    return this.toolsForm.get('toolId');
  }

  getLanguageId(){
    return this.toolsForm.get('languageId');
  }

  getQuantity(){
    return this.toolsForm.get('quantity');
  }

  getVersion(){
    return this.toolsForm.get('version');
  }

  getDateEntered(){
    return this.toolsForm.get('dateEntered');
  }

  preview: string = '';

  bindWarehouse(){
    this.warehouseData.toolsId = Number(this.getToolId()?.value);
    this.warehouseData.languageId = Number(this.getLanguageId()?.value);
    this.warehouseData.quantityAvailable = Number(this.getQuantity()?.value);
    this.warehouseData.dateCreated = new Date(String(this.getDateEntered()?.value));
    this.warehouseData.version = String(this.getVersion()?.value);

    this.serviceService.addWarehouseTool(this.warehouseData).subscribe( 
      data =>{console.log(data);
      },
      error => console.log(error));

  }

  save() {
    this.preview = JSON.stringify(this.toolsForm.value);
    this.bindWarehouse();
  }


  private getTools() {
    this.serviceService.getAllTools().subscribe(
      (data: Tools[]) => {
        console.log(data);
        this.tools = data;
      }
    );
  }

  private getWarehouseTools() {
    this.serviceService.getAllWarehouseTools().subscribe(
      (data: Warehouse[]) => {
        console.log(data);
        this.warehouses = data;
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

  ngOnInit() {
    this.getTools();
    this.getAllLanguages();
  }

}
