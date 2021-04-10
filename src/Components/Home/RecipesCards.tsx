import { IRecipe } from '../../Models/Recipe'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import RecipesCardsSkeleton from './RecipesCardsSkeleton';

export const useCardStyles = makeStyles((theme) => ({
  buttons:{
    marginTop:'2em',
  },
  card:{
    height:'100%',
    display:'flex',
    flexDirection: 'column',
  },
  cardMedia:{
    paddingTop:'56.25%'
  },
  cardContent:{
    flexGrow: 1,
  },
  cardActions:{
    display:'flex',
    justifyContent:'flex-end',
  },
}))

interface props {
  Recipes : IRecipe[],
  Loading: boolean,
  HandleAddToShoppingList: Function,
}

export const RecipesCards = (props:props) => {
  const theme = useCardStyles();
  const { Recipes, Loading, HandleAddToShoppingList } = props;
  
  return (
    Loading 
    ? <RecipesCardsSkeleton skeletons={9} /> 
    : <>
        { Recipes.map((recipe:IRecipe) => (
          <Grid item xs={3} key={recipe.id}>
            <Card>
              <CardMedia 
                className={theme.cardMedia} 
                image={recipe.image ? recipe.image : 'images/food.jpg'}/> 
              <CardContent className={theme.cardContent}>
                <Typography variant="h6" gutterBottom={true}> {recipe.name}</Typography>
              </CardContent>
              <CardActions className={theme.cardActions}>
                <Button>View</Button>
                <Button color="primary" onClick={() => HandleAddToShoppingList(recipe)}>Add to list</Button>
              </CardActions>
              </Card>
            </Grid> 
          ))}
      </>
    )
}
