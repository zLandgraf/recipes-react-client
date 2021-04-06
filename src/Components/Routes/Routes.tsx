import { Recipes } from '../Recipes/Recipes';
import { AddRecipeForm } from '../Recipes/AddRecipes/AddRecipeForm';
import { Switch, Route, Redirect } from 'react-router-dom'
import { NotFound } from '../Layout/NotFound/NotFound';
import { AddIngredient } from '../Ingredients/AddIngredient';

export const RecipesPath = '/recipes';
export const AddRecipesRoute = '/recipes/add';
export const AddIngredientRoute = '/ingredient/add';

export function AddAppRoutes () {
  return (
    <Switch>
      <Route exact={true} path={RecipesPath} component={Recipes}/>
      <Route exact={true} path={AddRecipesRoute} component={AddRecipeForm}/>
      <Route exact={true} path={AddIngredientRoute} component={AddIngredient}/>
      <Redirect exact={true} from='/' to={RecipesPath} />
      <Route component={NotFound}/>
    </Switch>
  )
}