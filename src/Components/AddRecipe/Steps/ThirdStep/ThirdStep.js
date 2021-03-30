import React from 'react'
import Button from '@material-ui/core/Button'
import Ingredient from './Ingredient'

const ThirdStep = ({ ChangeStep, CurrentIngredients, HandleAdjustIngredients }) => { 
  return (
    <>
        <h1>Choose the amount and units of the ingredients </h1>
        <form>
          {CurrentIngredients.map(ingredient => 
            <Ingredient
              key={ingredient.id} 
              Ingredient={ingredient}
              HandleAdjustIngredients={HandleAdjustIngredients} />
          )}
          <Button onClick={() => ChangeStep('thirdStep', 'secondStep')}>Back </Button>
          <Button type="submit"> Finish </Button>
        </form>
    </>
  )
}
export default ThirdStep;