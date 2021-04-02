import { IRecipe } from '../../Models/Recipe';
import { 
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions } from '@material-ui/core';
import { HomeTheme } from './HomeTheme';

interface props {
  recipe : IRecipe,
}

const Recipes = (props : props) => {
  const classes = HomeTheme();
  const { recipe } = props;

  return (
    <>
      <Grid item xs={4} key={recipe.id}>
        <Card>
          <CardMedia 
            className={classes.cardMedia} 
            image={recipe.image}> 
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" gutterBottom={true}> {recipe.name}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button>View</Button>
            <Button color="primary">Add to list</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default Recipes;