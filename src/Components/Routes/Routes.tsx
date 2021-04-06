import { Recipes } from '../Recipes/Recipes';
import { AddRecipeForm } from '../Recipes/AddRecipes/AddRecipeForm';
import { AddIngredientForm } from '../Ingredients/AddIngredientForm';
import { Switch, Route, Redirect } from 'react-router-dom'
import { NotFound } from '../Layout/NotFound/NotFound';

export const RecipesPath = '/recipes';
export const AddRecipesRoute = '/recipes/add';
export const AddIngredientRoute = '/ingredient/add';

export function AddAppRoutes () {
  return (
    <Switch>
      <Route exact={true} path={RecipesPath} component={Recipes}/>
      <Route exact={true} path={AddRecipesRoute} component={AddRecipeForm}/>
      <Route exact={true} path={AddIngredientRoute} component={AddIngredientForm}/>
      <Redirect exact={true} from='/' to={RecipesPath} />
      <Route component={NotFound}/>
    </Switch>
  )
}