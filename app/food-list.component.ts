import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
  <select class="form-control" (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="high">High Calories</option>
    <option value="low">Low Calories</option>
  </select>
  <div *ngFor="let currentFood of childFoodList">
    <food-display [food]="currentFood"></food-display>
    <button (click)="editButtonClick(currentFood)">Edit</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: string = "all";
  onChange(optionFromMenu)
  {
    this.selectedCalories = optionFromMenu;
    console.log(this.selectedCalories);
  }
  editButtonClick(foodEdit: Food) {
    this.clickSender.emit(foodEdit);
  }

}
