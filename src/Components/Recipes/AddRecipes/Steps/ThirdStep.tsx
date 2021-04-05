import { Grid, TextField } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { IIngredient } from "../../../../Models/Recipe";
import { FormTheme } from "../AddRecipeTheme";

interface props {
  Ingredients: IIngredient[],
  HandleNext: Function,
  HandleBack: Function,
  HandleAdjustIngredient: Function
}

export const ThirdStep = (props:props) => {
  const theme = FormTheme();
  const {Ingredients, HandleNext, HandleBack, HandleAdjustIngredient } = props;
  
  return (
    <Grid container justify='center' spacing={6}>
      {Ingredients.map((ingredient) => (
        <Grid 
          container 
          justify='center' 
          spacing={2} 
          key={ingredient.id}
          className={theme.ingredientContainer}>
          <Grid item xs={4}>
            <TextField
              label="Name" 
              name="name"
              variant="outlined"
              defaultValue={ingredient.name}
              disabled={true}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              type="number" 
              label="Amount" 
              name="amount"
              value={ingredient.amount}
              onChange={(e) => HandleAdjustIngredient(e, ingredient.id)} 
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField 
              label="Unit"
              name="unit"
              value={ingredient.unit} 
              onChange={(e) => HandleAdjustIngredient(e, ingredient.id)} 
              fullWidth
            />
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} className={theme.buttons}>
        <Button
          className={theme.button} 
          variant="contained" 
          size="large"
          onClick={() => HandleBack()}> 
          Back 
        </Button>
        <Button
          className={theme.button} 
          type="submit"
          size="large"
          variant="contained" 
          color="primary"
          onClick={() => HandleNext()}> 
          Next 
        </Button>
      </Grid>
    </Grid>
  )
}
