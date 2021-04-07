import {useState, useEffect} from 'react'
import { IRecipe } from '../../Models/Recipe'
import { Grid, makeStyles } from '@material-ui/core'
import FloatButton from '../Layout/FloatButton/FloatButton'
import { RecipesCards } from './RecipesCards'
import { RecipesCardsSkeleton } from './RecipesCardsSkeleton'

const useStyles = makeStyles((theme) => ({
  cardsContainer:{
    padding: theme.spacing(8,12,8,12),
  },
}))

export const Home = () => {
  const theme = useStyles();
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://localhost:44348/api/recipe?ItemsPerPage=${itemsPerPage}`);
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
        {loading 
          ? <RecipesCardsSkeleton skeletons={itemsPerPage} /> 
          : <RecipesCards Recipes={recipes} />}
      </Grid>
      <FloatButton />
    </>
  )
}

