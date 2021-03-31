import React from 'react'
import Button from '@material-ui/core/Button'
import Ingredient from './Ingredient'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));


const ThirdStep = ({ MoveBack, CurrentIngredients, HandleAdjustIngredients, HandleCreatRecipe }) => { 
  const classes = useStyles();
 
  const handleSubmit = e => {
    e.preventDefault();
    HandleCreatRecipe();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {CurrentIngredients.map(ingredient => 
            <Ingredient
              key={ingredient.id} 
              Ingredient={ingredient}
              HandleAdjustIngredients={HandleAdjustIngredients} />
          )}
          <Grid item xs={12} className={classes.buttons}>
            <Button
              className={classes.button} 
              variant="contained" 
              size="large"
              onClick={() => MoveBack()}> 
              Back 
            </Button>
            <Button
              className={classes.button} 
              type="submit"
              size="large"
              variant="contained" 
              color="primary"> 
              Finish 
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
export default ThirdStep;