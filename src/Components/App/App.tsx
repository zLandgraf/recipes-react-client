import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AddIngredientRoute, AddRecipesRoute, HomeRoute } from '../Routes/Routes';
import { AddRecipeForm } from '../CreateRecipe/AddRecipeForm';
import { AddIngredient } from '../CreateIngredient/AddIngredient';
import { Home } from '../Home/Home';
import Navbar from '../Layout/Navbar/Navbar';
import { NotFound } from '../Layout/NotFound/NotFound';

export function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route 
          exact={true} 
          path={AddRecipesRoute} 
          component={AddRecipeForm}/>
        <Route 
          exact={true} 
          path={AddIngredientRoute} 
          component={AddIngredient}/>
        <Route 
          exact={true}
          path={HomeRoute}
          component={Home}/>
        <Redirect  exact={true} from='/' to={HomeRoute} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default App;