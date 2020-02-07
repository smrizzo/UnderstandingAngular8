import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Coconut Cake', 'Made with coconut', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/04/coconut-cake-5.jpg'),
    new Recipe('Coconut Cake', 'Made with coconut', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/04/coconut-cake-5.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
