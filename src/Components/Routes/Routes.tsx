import { AddRecipeForm } from '../Recipes/AddRecipes/AddRecipeForm';
import { Switch, Route, Redirect } from 'react-router-dom'
import { NotFound } from '../Layout/NotFound/NotFound';
import { AddIngredient } from '../Ingredients/AddIngredient';
import { Home } from '../Home/Home';

export const HomeRoute = '/home';
export const AddRecipesRoute = '/recipes/add';
export const AddIngredientRoute = '/ingredient/add';

export function AddAppRoutes () {
  return (
    <Switch>
      <Route exact={true} path={AddRecipesRoute} component={AddRecipeForm}/>
      <Route exact={true} path={AddIngredientRoute} component={AddIngredient}/>
      <Route exact={true} path={HomeRoute} component={Home}/>
      <Redirect exact={true} from='/' to={HomeRoute} />
      <Route component={NotFound}/>
    </Switch>
  )
}