import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h2>Log a New Meal</h2>
  <div>
    <label>Enter the name of the food you ate:</label>
    <input #newName>
  </div>
  <div>
    <label>Enter the a desciption for this meal:</label>
    <input #newDescription>
  </div>
  <div>
    <label>enter the number of calories in the meal:</label>
    <input #newCalories>
    <button (click)="
        addClicked(newName.value, newDescription.value, newCalories.value);
        newName.value='';
        newDescription.value='';
        newCalories.value='';
        ">Log!</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter()
  addClicked(name: string, description: string, calories: number) {
    var newFood: Food = new Food(name, description, calories);
    this.newFoodSender.emit(newFood);
  }
}
