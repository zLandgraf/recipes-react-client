import React from 'react'

const Recipe = (props) => {
  
  return (
    <div class="row p-5"> 
      {props.recipes.map(recipe => 
      (
        <div className="card mr-3 col-3" key={recipe.id}>
          <div className="card-header bg-transparent">
            <h2>{recipe.name}</h2>
          </div>
          <div className="card-body">
            <ul className="">
              {recipe.ingredients.map(ingredient => (
              <> 
                <li key={ingredient.id}> {ingredient.name} </li>
              </>
              ))}
            </ul>
          </div>
          <div className="card-footer bg-transparent">
            <button key={recipe.id} className="btn btn-primary">Adicionar à lista</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recipe;
