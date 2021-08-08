import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './component/main/main.component';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardModule
  ],
  exports: [
    MainComponent
  ]
})
export class SproutMainModule { }
