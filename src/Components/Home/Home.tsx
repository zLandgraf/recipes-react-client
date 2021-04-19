import {useState, useEffect} from 'react'
import { IRecipe, IShoppingItems } from '../../Models/Recipe'
import { Grid, makeStyles } from '@material-ui/core'
import FloatButton from '../Layout/FloatButton/FloatButton'
import { RecipesCards } from './RecipesCards'

const useStyles = makeStyles((theme) => ({
  cardsContainer:{
    padding: theme.spacing(8,12,8,12),
  },
}))

interface props {
  recipes: IRecipe[],
  loading: boolean,
  handleAddToShoppingList: Function,
}

export const Home : React.FC<props> = ({ recipes, loading, handleAddToShoppingList }) => {
  const theme = useStyles();
  return (
    <>
      <Grid container spacing={8} justify='center' className={theme.cardsContainer}>
        <RecipesCards 
          Recipes={recipes} 
          Loading={loading} 
          HandleAddToShoppingList={handleAddToShoppingList} />
      </Grid>
      <FloatButton />
    </>
  )
}

