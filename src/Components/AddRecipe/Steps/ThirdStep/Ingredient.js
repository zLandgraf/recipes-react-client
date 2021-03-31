import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';

const Ingredient = ({Ingredient, HandleAdjustIngredients}) => {

  const handleChange = (e, id) => {
      HandleAdjustIngredients(id, e.target.name, e.target.value);
   }

  return (
   <>
    <Grid item xs={12} sm={4}>
      <TextField
        variant='filled' 
        label="Name" 
        name="name" 
        value={Ingredient.name} 
        disabled={true}
        fullWidth 
      />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField 
        label="Amount" 
        name="amount"
        value={Ingredient.amount} 
        onChange={(e) => handleChange(e, Ingredient.id)} 
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField 
        label="Unit"
        name="unit"
        value={Ingredient.unit}
        onChange={(e) => handleChange(e, Ingredient.id)}
        fullWidth
      />
    </Grid>
   </>
  )
}

export default Ingredient