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

  const handleCreatRecipe = () => {
    let request = {
      name: recipe.name,
      ingredients: recipe.ingredients.map(ingredient => {
        return {
          ...ingredient,
          amount: parseInt(ingredient.amount)
        }
      })
    }
    
    console.log(request);

    fetch('https://localhost:44348/api/recipe', {
       method: 'post',
       body: JSON.stringify(request),
       headers:{
         "Content-Type": "application/json"
       }
    })
    .then(async (response) => await response.json())
    .then((data) => console.log(data));
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
      HandleAdjustIngredients={handleAdjustIngredients} 
      HandleCreatRecipe={handleCreatRecipe} />)
}

export default Recipes