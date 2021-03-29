import React from 'react'
import { useState } from 'react'

const Ingredient = props => {
  const [ingredient, setIngredient] = useState(props.ingredient)
  
  const handleChange = (event) => {
    setIngredient({...ingredient, [event.target.name] : event.target.value })
  }

  return (
      <div className="form-group row mb-3">
        <div className="form-group col-4">
          <span>Ingrediente: </span>
          <input 
            onChange={handleChange}
            value={ingredient.name} 
            type="text" 
            name='name' 
            className="form-control" />
        </div>
        <div className="form-group col-4">
          <span>Quantidade: </span>
          <input 
           onChange={handleChange}
           value={ingredient.amount} 
           type="number"
           name='amount'
           className="form-control" />
        </div>
        <div className="form-group col-4">
          <span>Unidade: </span>
          <input 
            onChange={handleChange}
            value={ingredient.unit} 
            type="text"
            name='unit'
            className="form-control" />
        </div>
      </div>
  )
}

export default Ingredient
