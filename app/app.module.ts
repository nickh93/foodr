import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { AppComponent }        from './app.component';
import { FoodListComponent}    from './food-list.component';
import { FoodComponent }        from './food.component';

@NgModule ({
  imports:      [BrowserModule],
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodComponent
  ],
  bootstrap:     [AppComponent]
})

export class AppModule { }
