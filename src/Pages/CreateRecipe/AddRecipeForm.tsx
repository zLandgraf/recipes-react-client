import React, { useState } from 'react'
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Grid,
  LinearProgress,
  makeStyles
} from '@material-ui/core';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded'
import { ICreateRecipe } from '../../Models'
import { FirstStep } from './FirstStep'
import { ThirdStep } from './ThirdStep'
import { SecondStep } from './SecondStep'
import { Success } from '../Common/'

export const FormTheme = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  formContainer: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
  },
  layout: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  paper: {
    padding: '2em 3em 2em 3em',
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  linkButton: {
    textDecoration: "none",
  },
  ingredientContainer: {
    padding: theme.spacing(4, 4, 2, 4)
  },
  cardMedia: {
    paddingTop: '56.25%',
    borderRadius: '.25rem',
  },
  spinner: {
    marginLeft: '10px',
  }
}));

const createRecipe: ICreateRecipe = {
  name: '',
  ingredients: []
}

const AddRecipeForm = () => {
  const theme = FormTheme();
  const stepsLabel: string[] = ['Recipe name', 'Choosing ingredients', 'Preparation'];
  const [activeStep, setActiveStep] = useState<number>(0);
  const [recipe, setRecipe] = useState<ICreateRecipe>(createRecipe);
  const [created, setCreated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({ ...recipe, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleChooseIngredient = (selectedOptions: any[]) => {
    setRecipe({
      ...recipe, ingredients: [...selectedOptions.map(option => {
        return {
          id: option.id,
          name: option.name,
          amount: 0,
          unit: '',
        }
      })]
    })
  }

  const handleIngredientAmount = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setRecipe({
      ...recipe, ingredients: [...recipe.ingredients.map((ingredient) => {
        if (ingredient.id === id)
          return {
            ...ingredient,
            amount: parseFloat(e.currentTarget.value || '0')
          }
        return ingredient;
      })]
    })
  }

  const handleIngredientUnit = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = e.currentTarget;
    setRecipe({
      ...recipe, ingredients: [...recipe.ingredients.map((ingredient) => {
        if (ingredient.id === id)
          return {
            ...ingredient,
            unit: value
          }
        return ingredient;
      })]
    })
  }

  const handleFinish = async () => {
    setLoading(true);
    let response = await fetch('https://localhost:44348/api/recipe', {
      method: 'post',
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (response.ok)
      setCreated(true);

    setLoading(false);
  }

  const handleAddNewOne = () => {
    setActiveStep(0);
    setRecipe(createRecipe);
    setCreated(false);
  }

  const renderStep = (step: number) => {
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
          Loading={loading}
          HandleNext={handleFinish}
          HandleBack={handleBack}
          HandleIngredientAmount={handleIngredientAmount}
          HandleIngredientUnit={handleIngredientUnit} />
    }
  }

  return (
    <Grid container justify='center'>
      <Grid item xs={6} className={theme.formContainer}>
        {loading && <LinearProgress />}
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
                  <FastfoodRoundedIcon fontSize='inherit' />
                </Typography>
                <Stepper activeStep={activeStep} className={theme.stepper}>
                  {stepsLabel.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                { renderStep(activeStep)}
              </React.Fragment>
            )}
        </Paper>
      </Grid>
    </Grid>
  )
}


export default AddRecipeForm;