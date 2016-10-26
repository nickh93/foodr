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
    new Food("Hamburger", "Two hamburger buns with lettuce, tomamto, raw onions, mayonise, ketchup, and a side of fries", 500),
    new Food("bandeja paisa", "red beans cooked with pork, white rice, carne molida (ground meat), chicharrón, fried egg, plantain (plátano maduro), chorizo, arepa, hogao sauce, black pudding (morcilla), avocado and lemon.[1] It is served in a platter or a tray.", 900),
    new Food("arepa", "flat, round, unleavened patty of soaked, ground kernels of maize, or maize meal or maize flour that can be grilled, baked, fried, boiled or steamed.", 350),
    new Food("empanadas", "maize meal filled with potatoes and meat which are previously stir-fried with spring onion, tomatoes, garlic and cumin. Empanadas are usually fried, but can be prepared in oven", 300),
    new Food("Ajiaco", "soup prepared with hicken, three varieties of potatoes, and the Galinsoga parviflora herb, commonly referred to in Colombia as guasca", 550),
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
