import React from 'react'
import { useState } from 'react'
import Ingredient from '../Ingredients/Ingredient'

const AddRecipe = props => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: [{
      name: '',
      amount:0,
      unit: 0
    }],
  });

  const handleChangeRecipeName = (event) => 
  {
    setRecipe({...recipe, [event.target.name] : event.target.value })
  }

  const handleAddIngredient = (event) => 
  {
    event.preventDefault();
    setRecipe({...recipe, ingredients: [...recipe.ingredients, 
      {
        name: '',
        amount:0,
        unit: 0
      }
    ]});
  }

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <form>
          <div className="form-group mb-3">
            <span>Nome: </span>
            <input
              onChange={handleChangeRecipeName}
              value={recipe.name} 
              type="text"
              className="form-control"
              name='name' />
          </div>
          {recipe.ingredients.map(item => (<Ingredient ingredient={item} />))}
          <div className="form-group row justify-content-end p-1">
            <div class="col-3">
              <button 
                onClick={handleAddIngredient}
                className="btn btn-success form-control">
                  Ingredient
              </button>
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary form-control">Finalizar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddRecipe
