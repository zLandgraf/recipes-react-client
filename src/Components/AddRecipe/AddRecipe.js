import React from 'react'
import { useState } from 'react'
import FirstStep from './Steps/FirstStep'
import SecondStep from './Steps/SecondStep'
import ThirdStep from './Steps/ThirdStep/ThirdStep'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
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
}));

const Recipes = () => {
  const classes = useStyles();
  const steps = ['Recipe name', 'Choosing ingredients', 'Preparation']
  const [activeStep, setActiveStep] = React.useState(0);
  const [recipe, setRecipe] = useState({name: '',  ingredients: []});
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChooseRecipeName = newName => {
    setRecipe({...recipe, name: newName });
  }

  const handleChooseIngredients = ingredients => {
    console.log(ingredients);
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

  const getStep = (step) => {
    switch (step) {
      case 0:
        return <FirstStep 
          MoveNext={handleNext} 
          CurrentName={recipe.name} 
          ChooseRecipeName={handleChooseRecipeName} />;
      case 1:
        return <SecondStep 
          CurrentIngredients={recipe.ingredients} 
          MoveNext={handleNext}
          MoveBack={handleBack} 
          ChooseIngredients={handleChooseIngredients}/>;
      case 2:
        return <ThirdStep  
          CurrentIngredients={recipe.ingredients} 
          MoveBack={handleBack} 
          HandleAdjustIngredients={handleAdjustIngredients} 
          HandleCreatRecipe={handleCreatRecipe}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography color='secondary' variant="h3" align="center">
            <FastfoodRoundedIcon fontSize='inherit'/>
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          { getStep(activeStep) }
        </Paper>
      </main>
    </React.Fragment>
  )
}

export default Recipes