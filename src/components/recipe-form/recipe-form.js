import React, { Component } from 'react';
// import RecipeName from './recipe-name'
// import IngredientsInput from './ingredients-input'

 class RecipeForm extends Component {

   addRecipe(e){
      e.preventDefault();
      let id = Math.floor((Math.random() * 100) + 1).toString();
      let recipeName = this.refs.recipeName.value;
      let ingredients = this.refs.ingredients.value.split(',');
      this.props.addRecipeToState({id, recipeName, ingredients})
   }

   render(){
     return (
       <form onSubmit={this.addRecipe.bind(this)} className="recipe-form">
       {/* Simplified form using video https://www.youtube.com/watch?v=1eNIYif69_0 */}
         <h2 className="add-recipe-title">Add a Recipe</h2>
         {/* draw a line here in future */}
         <div>
          <strong>Recipe Name</strong>
          <input ref="recipeName" placeholder="Type the Recipe Name" />
        </div>
         <div>
          <strong>Ingredients</strong>
          <input ref="ingredients" placeholder="Type,the,ingredients,in,this,format" />
        </div>
         {/* draw a line here in future */}
         <div>
           <button type="submit">Add Recipe</button>
           <button>Close</button>
         </div>
       </form>
     );
   }
}

export default RecipeForm;
