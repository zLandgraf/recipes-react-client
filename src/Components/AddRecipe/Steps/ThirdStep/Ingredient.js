import React from 'react'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';

const Ingredient = ({Ingredient, HandleAdjustIngredients}) => {

  const [unit, setUnit] = useState(Ingredient.unit ? Ingredient.unit : "" );
  const [amount, setAmount] = useState(Ingredient.amount ? Ingredient.amount : 0);

  const handleChangeUnit = (e, id) => {
      setUnit(e.target.value);
      HandleAdjustIngredients(id, e.target.name, e.target.value);
  }

  const handleChangeAmount = (e, id) => {
      setAmount(e.target.value);
      HandleAdjustIngredients(id, e.target.name, e.target.value);
  }

  return (
   <>
    <Grid item xs={12} sm={4}>
      <TextField
        variant='filled' 
        label="Name" 
        name="name" 
        disabled={true}
        fullWidth > {Ingredient.name} </TextField>
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField
        type="number" 
        label="Amount" 
        name="amount"
        value={amount} 
        onChange={(e) => handleChangeAmount(e, Ingredient.id)} 
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={4}>
      <TextField 
        label="Unit"
        name="unit"
        value={unit}
        onChange={(e) => handleChangeUnit(e, Ingredient.id)}
        fullWidth
      />
    </Grid>
   </>
  )
}

export default Ingredient