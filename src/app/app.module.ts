import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-cdbangular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllWarehouseToolsComponent } from './all-warehouse-tools/all-warehouse-tools.component';
import { AllToolsByProvincesComponent } from './all-tools-by-provinces/all-tools-by-provinces.component';
import { AllToolsByCatagoryComponent } from './all-tools-by-catagory/all-tools-by-catagory.component';
import { TopThreeProvincesComponent } from './top-three-provinces/top-three-provinces.component';
import { ChartModule } from 'angular-highcharts';
import { RegisterToolComponent } from './register-tool/register-tool.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    AllWarehouseToolsComponent,
    AllToolsByProvincesComponent,
    AllToolsByCatagoryComponent,
    TopThreeProvincesComponent,
    RegisterToolComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
