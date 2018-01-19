import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeList: AngularFireList<any>; 
  selectedRecipe: Recipe = new Recipe();

  constructor(private firebase : AngularFireDatabase) { }

  getData() {
    this.recipeList = this.firebase.list('recipes');
    return this.recipeList;
  }

  insertRecipe(recipe : Recipe){
    this.recipeList.push({
      recipeID : recipe.recipeID,
      // title : recipe.title,
      // category: recipe.category ,
      // description :recipe.description,
      // servingSize : recipe.servingSize,
      // ingredients: recipe.ingredients, 
      // procedure : recipe.procedure,
    });
  }

  updateRecipe(recipe: Recipe){
    this.recipeList.update(recipe.$key,
      {
        recipeID : recipe.recipeID,      
        // title : recipe.title,
        // category: recipe.category, 
        // description :recipe.description,
        // servingSize : recipe.servingSize,
        // ingredients: recipe.ingredients, 
        // procedure : recipe.procedure,
      }
    );
  }

  deleteRecipe($key: string){
    this.recipeList.remove($key);
  }

}
