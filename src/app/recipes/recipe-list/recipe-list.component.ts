import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Choco Cake', 'Delicious tasty cake', '../../../assets/img/cake.jpg'),
    new Recipe('Monsetto', 'Well cooked sugary', '../../../assets/img/cake.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
