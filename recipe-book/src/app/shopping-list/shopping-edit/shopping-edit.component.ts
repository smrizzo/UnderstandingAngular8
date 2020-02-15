import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) ingredientName: ElementRef;
  @ViewChild('amountInput', { static: false }) ingredientAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.ingredientAdded.emit(
      new Ingredient(
        this.ingredientName.nativeElement.value,
        this.ingredientAmount.nativeElement.value));
  }
}
