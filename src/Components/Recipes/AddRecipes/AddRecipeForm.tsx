import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded'
import { FormTheme } from './AddRecipeTheme'
import { ICreateRecipe } from '../../../Models/Recipe'
import { FirstStep } from './Steps/FirstStep'
import { SecondStep } from './Steps/SecondStep'
import { ThirdStep } from './Steps/ThirdStep'
import { Grid } from '@material-ui/core'
import { Success } from '../../Common/Success'

const createRecipe : ICreateRecipe = {
  name: '',
  ingredients: []
}

export const AddRecipeForm = () => {
  const theme = FormTheme();
  const stepsLabel:string[] = ['Recipe name', 'Choosing ingredients', 'Preparation'];
  const [activeStep, setActiveStep] = useState<number>(0);
  const [recipe, setRecipe] = useState<ICreateRecipe>(createRecipe);
  const [created, setCreated] = useState<boolean>(false);

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

  const handleIngredientAmount =  (e:React.ChangeEvent<HTMLInputElement>, id:string) => {
     setRecipe({...recipe, ingredients: [...recipe.ingredients.map((ingredient) => {
      if(ingredient.id === id)
        return {
          ...ingredient,
          amount: parseFloat(e.currentTarget.value || '0')
        }
        return ingredient;
    })]})
  }

  const handleIngredientUnit = (e:React.ChangeEvent<HTMLInputElement>, id:string) => {
    const {value} = e.currentTarget;
    setRecipe({...recipe, ingredients: [...recipe.ingredients.map((ingredient) => {
      if(ingredient.id === id)
        return {
          ...ingredient,
          unit: value
        }
        return ingredient;
    })]})
  }

  const handleFinish = async () => {
    let response = await fetch('https://localhost:44348/api/recipe', {
       method: 'post',
       body:JSON.stringify(recipe),
       headers:{
         "Content-Type": "application/json"
       }
    })

    if(response.ok)
      setCreated(true);
  }

  const handleAddNewOne = () => {
    setActiveStep(0);
    setRecipe(createRecipe);
    setCreated(false);
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
          HandleBack={handleBack} />
      case 2: 
        return <ThirdStep 
          Ingredients={recipe.ingredients} 
          HandleNext={handleFinish} 
          HandleBack={handleBack}
          HandleIngredientAmount={handleIngredientAmount} 
          HandleIngredientUnit={handleIngredientUnit} />
    }
  }

  return ( 
    <Grid container justify='center'>
      <Grid item xs={6}>
        <Paper className={theme.paper}>
          {created 
          ? (
              <Success 
                HandleAddNewOne={handleAddNewOne} 
                SuccessMessage={"Recipe Created!"} />
            ) 
          : (
              <React.Fragment>
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
              </React.Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  )
}
