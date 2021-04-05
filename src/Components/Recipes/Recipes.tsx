import {useState, useEffect} from 'react'
import { IRecipe } from '../../Models/Recipe'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { RecipesTheme } from './RecipesTheme'
import FloatButton from '../Layout/FloatButton/FloatButton'

export const Recipes = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const theme = RecipesTheme();

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('https://localhost:44348/api/recipe');
      if(response.ok) {
        const data = await response.json();
        setRecipes([...data.map((recipe:any) => {
          return {
            ...recipe,
            image: 'https://source.unsplash.com/random'
          }})]);
      }
    }
    fetchRecipes();
  }, [])

  return (
    <>
      <Grid container spacing={8} justify='center' className={theme.cardsContainer}>
        {recipes.map((recipe:IRecipe) => (
          <Grid item xs={4} key={recipe.id}>
            <Card>
              <CardMedia 
                className={theme.cardMedia} 
                image={recipe.image}> 
              </CardMedia>
              <CardContent className={theme.cardContent}>
                <Typography variant="h6" gutterBottom={true}> {recipe.name}</Typography>
              </CardContent>
              <CardActions className={theme.cardActions}>
                <Button>View</Button>
                <Button color="primary">Add to list</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <FloatButton />
    </>
  )
}
