import { IRecipe } from '../../Models/Recipe'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'

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
}

export const RecipesCards = (props:props) => {
  const theme = useCardStyles();
  const { Recipes } = props;
  
  return (
    <>
      { Recipes.map((recipe:IRecipe) => (
        <Grid item xs={4} key={recipe.id}>
          <Card>
            <CardMedia 
              className={theme.cardMedia} 
              image={recipe.image ? recipe.image : 'images/food.jpg'}/> 
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
    </>
  )
}
