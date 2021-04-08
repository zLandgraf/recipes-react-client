import {useState, useEffect} from 'react'
import { IRecipe } from '../../Models/Recipe'
import { Grid, makeStyles } from '@material-ui/core'
import FloatButton from '../Layout/FloatButton/FloatButton'
import { RecipesCards } from './RecipesCards'
import { ShoppingList } from './ShoppingList'

const useStyles = makeStyles((theme) => ({
  cardsContainer:{
    padding: theme.spacing(8,12,8,12),
  },
}))

export interface IShoppingItems {
  id: number,
  recipe : IRecipe,
  day: string,
  meal: string,
}

export const Home = () => {
  const theme = useStyles();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [shoppingOpen, setShoppingOpen] = useState<boolean>(false);
  const [shoppingItems, setShoppingItems] = useState<IShoppingItems[]>([])

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

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://localhost:44348/api/recipe?ItemsPerPage=9`);
      if(response.ok) {
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
      }
    }
    fetchRecipes();
  }, [])

  return (
    <>
      <Grid container spacing={8} justify='center' className={theme.cardsContainer}>
        {shoppingOpen 
          ? <ShoppingList
              ShoppingItems = {shoppingItems} 
              HandleContinueAdding={handleContinueAddingToShoppingList}/> 
          : <RecipesCards 
              Recipes={recipes} 
              Loading={loading} 
              HandleAddToShoppingList={handleAddToShoppingList}/>
        } 
      </Grid>
      <FloatButton />
    </>
  )
}

