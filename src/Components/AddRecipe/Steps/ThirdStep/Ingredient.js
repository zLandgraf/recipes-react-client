import React from 'react'
import TextField from '@material-ui/core/TextField'

const Ingredient = ({Ingredient, HandleAdjustIngredients}) => {

  const handleChange = (e, id) => {
      HandleAdjustIngredients(id, e.target.name, e.target.value);
   }

  return (
   <>
       <TextField 
          label="Name" 
          name="name" 
          value={Ingredient.name} 
          disabled={true} 
        />
       <TextField 
          label="Amount" 
          name="amount"
          value={Ingredient.amount} 
          onChange={(e) => handleChange(e, Ingredient.id)} 
        />
       <TextField 
          label="Unit"
          name="unit"
          value={Ingredient.unit}
          onChange={(e) => handleChange(e, Ingredient.id)}
        />
       <br />
       <br />
   </>
  )
}

export default Ingredient