import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood">
    <h5>Edit This Food Intake</h5>
    <div>
      <label>Enter the new food name:</label>
      <input [(ngModel)] = "childSelectedFood.name">
    </div>
    <div>
      <label>Enter a new sescription:</label>
      <input [(ngModel)] = "childSelectedFood.description">
    </div>
    <div>
      <label>Enter a new calorie intake for the new food:</label>
      <input [(ngModel)] = "childSelectedFood.calories">
      <button (click)="editClicked()">Update</button>
    </div>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() editClickedSender = new EventEmitter();
  editClicked() {
    this.editClickedSender.emit();
  }
}
