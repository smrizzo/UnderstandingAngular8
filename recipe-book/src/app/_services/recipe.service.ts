import { Recipe } from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Coconut Cake',
      'Made with coconut',
      'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/04/coconut-cake-5.jpg',
      [
        new Ingredient('Coconut chips', 20),
        new Ingredient('Frosting', 30)
      ]),
    new Recipe(
      'Coconut Cake',
      'Made with coconut',
      'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/04/coconut-cake-5.jpg',
      [
        new Ingredient('Coconut chips', 20),
        new Ingredient('Frosting', 30)
      ])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
