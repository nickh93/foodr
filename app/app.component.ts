import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Foodr</h1>
    <h3>Track your eating habits easily!</h3>
    <food-list
      [childFoodList]="masterFoodList"
      (clickSender)="showDetails($event)"
    ></food-list>
    <edit-food
      [childSelectedFood]="selectedFood"
      (editClickedSender)="finishedEditing()"
    ></edit-food>
    <new-food
      (newFoodSender)="addFood($event)"
    ></new-food>
  </div>
  `
})

export class AppComponent {
  public masterFoodList: Food [] = [
    new Food("Hamburger", "Two hamburger buns with lettuce, tomamto, raw onions, mayonise, ketchup, and a side of fries", 350),
    new Food("bandeja paisa", "Two hamburger buns with lettuce, tomamto, raw onions, mayonise, ketchup, and a side of fries", 350),
    new Food("arepa", "Two hamburger buns with lettuce, tomamto, raw onions, mayonise, ketchup, and a side of fries", 350),
    new Food("empanadas", "Two hamburger buns with lettuce, tomamto, raw onions, mayonise, ketchup, and a side of fries", 350),
    new Food("Ajiaco", "Two hamburger buns with lettuce, tomamto, raw onions, mayonise, ketchup, and a side of fries", 350),
  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
  finishedEditing() {
    this.selectedFood = null;
  }
}
