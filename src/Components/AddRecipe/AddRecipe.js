import React from 'react'
import { useState } from 'react'
import FirstStep from './Steps/FirstStep'
import SecondStep from './Steps/SecondStep'
import ThirdStep from './Steps/ThirdStep/ThirdStep'

const Recipes = () => {

  const[steps, setSteps] = useState({
    firstStep: true,
    secondStep: false,
    thirdStep: false,
  });

  const[recipe, setRecipe] = useState({
    name: '',
    ingredients: []
  });
  
  const handleChangeStep = (previousStep, nextStep) => {
    setSteps({...steps, [previousStep]: false, [nextStep]: true });
  }

  const handleChooseRecipeName = newName => {
    setRecipe({...recipe, name: newName });
  }

  const handleChooseIngredients = ingredients => {
    setRecipe({...recipe, ingredients:[...ingredients] });
  }
  
  const handleAdjustIngredients = (id, field, value) => {
    setRecipe({...recipe, ingredients: recipe.ingredients.map(ingredient => {
      if(ingredient.id === id)
        return {
          ...ingredient,
          [field]: value,
        }
        return ingredient;
      })
    })
  }

  if(steps.firstStep) 
    return (<FirstStep 
      CurrentName={recipe.name}
      ChangeStep={handleChangeStep}  
      ChooseRecipeName={handleChooseRecipeName} />)
  if(steps.secondStep) 
    return (<SecondStep
      CurrentIngredients={recipe.ingredients} 
      ChangeStep={handleChangeStep} 
      ChooseIngredients={handleChooseIngredients} />)
  if(steps.thirdStep) 
    return (<ThirdStep
      CurrentIngredients={recipe.ingredients} 
      ChangeStep={handleChangeStep}  
      HandleAdjustIngredients={handleAdjustIngredients}/>)
}

export default Recipes