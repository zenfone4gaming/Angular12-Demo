import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SproutHeaderComponentComponent } from './sprout-header-component/sprout-header-component.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SproutHeaderComponentComponent
  ],
  exports: [
    SproutHeaderComponentComponent
  ]
})
export class SproutHeaderModule {
  constructor () {
    console.log('SproutHeaderModule loaded');
  }
 }
