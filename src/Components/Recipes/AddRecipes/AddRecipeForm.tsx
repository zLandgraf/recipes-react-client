import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded'
import { FormTheme } from './AddRecipeTheme'
import { IIngredient, ICreateRecipe } from '../../../Models/Recipe'
import { FirstStep } from './Steps/FirstStep'
import { SecondStep } from './Steps/SecondStep'
import { ThirdStep } from './Steps/ThirdStep'

const createRecipe : ICreateRecipe = {
  name: '',
  image: '',
  ingredients: []
}

export const AddRecipeForm = () => {
  const theme = FormTheme();
  const stepsLabel:string[] = ['Recipe name', 'Choosing ingredients', 'Preparation'];
  const [activeStep, setActiveStep] = useState<number>(0);
  const [recipe, setRecipe] = useState<ICreateRecipe>(createRecipe);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({...recipe, [e.currentTarget.name] : e.currentTarget.value})
  }

  const handleChooseIngredient = (selectedOptions:any[]) => {
    setRecipe({...recipe, ingredients:[...selectedOptions.map(option => {
        return {
          id: option.id,
          name: option.name,
          amount: 0,
          unit: '',
        }
      })]
    })
  }

  const renderStep = (step:number) => {
    switch (step) {
      case 0: 
        return <FirstStep
          Name={recipe.name}
          HandleChange={handleChange} 
          HandleNext={handleNext} />
      case 1: 
        return <SecondStep
          Ingredients={recipe.ingredients} 
          HandleChooseIngredient={handleChooseIngredient}
          HandleNext={handleNext} 
          HandleBack={handleBack}/>
      case 2: 
        return <ThirdStep 
          Ingredients={recipe.ingredients} 
          HandleNext={handleNext} 
          HandleBack={handleBack}/>    
    }
  }

  return ( 
    <main className={theme.layout}>
      <Paper className={theme.paper}>
        <Typography color='secondary' variant="h3" align="center">
          <FastfoodRoundedIcon fontSize='inherit'/>
        </Typography>
        <Stepper activeStep={activeStep} className={theme.stepper}>
          {stepsLabel.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        { renderStep(activeStep) }
      </Paper>
    </main>
  )
}
