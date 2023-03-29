import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { RegisterToolComponent } from './register-tool/register-tool.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch: 'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'register-tool', component:RegisterToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
