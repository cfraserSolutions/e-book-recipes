import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../shared/recipe.service';
import { Recipe } from './../shared/recipe.model';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList:Recipe[];
  // constructor(private recipeService: RecipeService, private toastr: ToastrService) { } // this one implements toaster pop up otifications... this needs to be installed
  constructor(private recipeService: RecipeService) { }
  

  //link to Object.assign() docs. This was used in htis method/function
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

  ngOnInit() {
    var x = this.recipeService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.recipeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.recipeList.push( y as Recipe)
      });
    });
  }

  onEdit(recipe : Recipe){
    this.recipeService.selectedRecipe= Object.assign({},recipe);
  }

  onDelete( key: string){
    if(confirm('Are you sure to delete this record?')== true){
      this.recipeService.deleteRecipe(key);
      // this.toastr.warning("Deleted Successfully", "Recipe Register");
    }
    
  }

}
