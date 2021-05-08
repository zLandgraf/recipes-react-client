import { CircularProgress, Grid, TextField } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { IIngredient } from "../../Models/Recipe";
import { FormTheme } from "./AddRecipeTheme";

interface props {
  Ingredients: IIngredient[],
  Loading: boolean,
  HandleNext: Function,
  HandleBack: Function,
  HandleIngredientAmount:Function
  HandleIngredientUnit: Function
}

export const ThirdStep = (props:props) => {
  const theme = FormTheme();
  const {Ingredients, Loading, HandleNext, HandleBack, HandleIngredientAmount, HandleIngredientUnit } = props;
  
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
              label="Amount" 
              name="amount"
              value={ingredient.amount}
              onChange={(e) => HandleIngredientAmount(e, ingredient.id)} 
              disabled={Loading}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField 
              label="Unit"
              name="unit"
              value={ingredient.unit} 
              onChange={(e) => HandleIngredientUnit(e, ingredient.id)} 
              disabled={Loading}
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
          disabled={Loading}
          onClick={() => HandleBack()}> 
          Back 
        </Button>
        <Button
          className={theme.button} 
          type="submit"
          size="large"
          variant="contained" 
          color="primary"
          disabled={Loading}
          onClick={() => HandleNext()}> 
          Next {Loading && <CircularProgress size={15} className={theme.spinner}/>}
        </Button>
      </Grid>
    </Grid>
  )
}
