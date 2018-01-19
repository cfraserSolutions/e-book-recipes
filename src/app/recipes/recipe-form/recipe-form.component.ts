import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RecipeService } from '../shared/recipe.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  // employeeList: AngularFireList<any>;

  // // this line impleents toastr
  // constructor(private recipeService: RecipeService, private toastr: ToastrService) { }
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    
    this.resetForm();
  }

  onSubmit(recipeForm:NgForm){
    if(this.recipeService.selectedRecipe.recipeID!==''){
      if(recipeForm.value.$key==null)
        this.recipeService.insertRecipe(recipeForm.value);
      else 
        //this will just change the value in db as this is technically also the edit form
        this.recipeService.updateRecipe(recipeForm.value);
    }
    this.resetForm()
    
    // this.toastr.success('Submitted Successfully', 'Employee Register');
  }

  // recipeForm? means that the variable is nullable
  resetForm(recipeForm?:NgForm){
    if(recipeForm!= null)
      recipeForm.reset();

    this.recipeService.selectedRecipe = {
      $key: null,
      recipeID: '',      
      // title : '',
      // category: '', 
      // description : '',
      // servingSize : 1, // set 1 as initial value as a meal wouldn't serve 0
      // ingredients: '', 
      // procedure : '',

    }
  }

}
