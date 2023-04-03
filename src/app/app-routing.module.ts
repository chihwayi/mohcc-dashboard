import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { RegisterToolComponent } from './register-tool/register-tool.component';
import { TransferToolsComponent } from './transfer-tools/transfer-tools.component';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseQuantitiesComponent } from './warehouse-quantities/warehouse-quantities.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch: 'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'register-tool', component:RegisterToolComponent},
  {path:'warehouse-list', component:WarehouseListComponent},
  {path:'transfer', component:TransferToolsComponent},
  {path:'quantities', component:WarehouseQuantitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
