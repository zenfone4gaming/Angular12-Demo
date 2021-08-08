import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SproutHeaderModule } from './sprout-header/sprout-header.module';
import { SproutNavigationModule } from './sprout-navigation/sprout-navigation.module';
import { SproutMainModule } from './sprout-main/sprout-main.module';



@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SproutHeaderModule,
    SproutNavigationModule,
    SproutMainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
