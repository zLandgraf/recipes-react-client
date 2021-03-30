import React from 'react'
import { useState } from 'react'
import FirstStep from './Steps/FirstStep'
import SecondStep from './Steps/SecondStep'
import ThirdStep from './Steps/ThirdStep'

const Recipes = () => {

  const[steps, setSteps] = useState({
    firstStep: true,
    secondStep: false,
    thirdStep: false,
  });

  const[recipe, setRecipe] = useState({
    name: '',
    ingredients: [{
      name: '',
      amount: 0,
      unit: '',
    }]
  });
  
  const handleChangeStep = (previousStep, nextStep) => {
    setSteps({...steps, [previousStep]: false, [nextStep]: true });
  }

  const handleChooseRecipeName = newName => {
    setRecipe({...recipe, name: newName });
  }

  const handleChooseIngredients = ingredients => {
    console.log(ingredients);
    setRecipe({...recipe, ingredients:[...ingredients] });
  }
  
  if(steps.firstStep) 
    return (<FirstStep ChangeStep={handleChangeStep} ChooseRecipeName={handleChooseRecipeName} />)
  if(steps.secondStep) 
    return (<SecondStep ChangeStep={handleChangeStep} ChooseIngredients={handleChooseIngredients} />)
  if(steps.thirdStep) 
    return (<ThirdStep ChangeStep={handleChangeStep} Ingredients={recipe.ingredients} />)
}

export default Recipes