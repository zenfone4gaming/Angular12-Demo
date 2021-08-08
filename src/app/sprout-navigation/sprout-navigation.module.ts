import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SproutNavigationComponentComponent } from './sprout-navigation-component/sprout-navigation-component.component';


@NgModule({
  declarations: [ SproutNavigationComponentComponent,],
  imports: [
    CommonModule
  ],
  exports : [ SproutNavigationComponentComponent,]
})
export class SproutNavigationModule { }
