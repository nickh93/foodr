import { Component, Input, Outputm EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood">
    <h5>Edit This Food Intake</h5>
    <div>
      <label>Enter the new food name:</label>
      <input [(ngModel)] = "childSelectedTask.name">
    </div>
    <div>
      <label>Enter a new sescription:</label>
      <input [(ngModel)] = "childSelectedTask.description">
    </div>
    <div>
      <label>Enter a Task Description:</label>
      <input [(ngModel)] = "childSelectedTask.calories">
    </div>
  </div>
  `
})
