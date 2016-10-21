import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  template: `
  <div>
    <ul>
      <li>{{ food.name }}</li>
      <ul>
        <li>{{ food.description }}</li>
        <li>{{ food.calories }}</li>
      </ul>
    </ul>
  </div>
  `
})

export class FoodComponent {
  @Input() food: Food;
}
