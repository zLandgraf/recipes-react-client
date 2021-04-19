import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AddIngredientRoute, AddRecipesRoute, HomeRoute, ShoppingListRoute } from '../Routes/Routes';
import { AddRecipeForm } from '../CreateRecipe/AddRecipeForm';
import { AddIngredient } from '../CreateIngredient/AddIngredient';
import { Home } from '../Home/Home';
import Navbar from '../Layout/Navbar/Navbar';
import { NotFound } from '../Layout/NotFound/NotFound';
import { useEffect, useState } from 'react';
import { IRecipe, IShoppingItems } from '../../Models/Recipe';
import { ShoppingList } from '../Home/ShoppingList';

export function App() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [shoppingOpen, setShoppingOpen] = useState<boolean>(false);
  const [shoppingItems, setShoppingItems] = useState<IShoppingItems[]>([])
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://localhost:44348/api/recipe?ItemsPerPage=12`);
      if(response.ok) {
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
      }
    }
    fetchRecipes();
  }, [])

  const handleAddToShoppingList = (recipe:IRecipe) => {
    setShoppingItems([...shoppingItems, {
      id: 1,
      recipe: recipe,
      day: '',
      meal: '',
    }]);

    setShoppingOpen(true);
  }

  const handleContinueAddingToShoppingList = () => {
    setShoppingOpen(false);
  }

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route 
          exact={true}
          path={HomeRoute} 
          component={ 
            shoppingOpen 
            ? () => <Redirect to={ShoppingListRoute} />  
            : () => <Home recipes={recipes} loading={loading} handleAddToShoppingList={handleAddToShoppingList} />
          }/>
        <Route
          exact={true}
          path={ShoppingListRoute}
          component={ 
            shoppingOpen 
            ? () => <ShoppingList shoppingItems={shoppingItems} handleContinueAdding={handleContinueAddingToShoppingList}/>  
            : () => <Redirect to={HomeRoute} />
          }/>
        <Route 
          exact={true}
          path={AddRecipesRoute}
          component={AddRecipeForm} />
        <Route
          exact={true}
          path={AddIngredientRoute}
          component={AddIngredient}/>
        <Redirect exact={true} from='/' to={HomeRoute} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default App;