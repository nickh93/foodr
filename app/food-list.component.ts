import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
  <select class="form-control">
  </select>
  <div *ngFor="let currentFood of childFoodList">
    <food-display [food]="currentFood"></food-display>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];

}
