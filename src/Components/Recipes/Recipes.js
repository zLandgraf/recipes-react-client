import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { 
  Grid,
  Typography,
  Fab,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  buttons:{
    marginTop:'2em',
  },
  cardsContainer:{
    padding:'4em 0 4em 0',
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
    flexGrow: '1',
  },
  cardActions:{
    display:'flex',
    justifyContent:'flex-end',
  },
  addRecipe: {
    position:'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(8)
  }
}));

const Recipes = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => {
    const response = await fetch('https://localhost:44348/api/recipe');
    if(response.ok) {
      const data = await response.json();
      setRecipes([...data.map(recipe => {
        return {
          ...recipe,
          image: 'https://source.unsplash.com/random'
        }
      })]);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [])

  return (
    <>
    <Grid container xs={12} justify='center'>
      <Grid container xs={10} spacing={8} className={classes.cardsContainer}>
        {recipes.map(recipe => (
            <Grid item xs={4} key={recipe.id}>
              <Card>
                <CardMedia 
                  className={classes.cardMedia} 
                  image={recipe.image}> 
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" gutterbottom>{recipe.name}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button>View</Button>
                  <Button color="primary">Add to list</Button>
                </CardActions>
              </Card>
            </Grid>
        ))}
      </Grid>
    </Grid>
    <Link to='/new'>
      <Fab color="primary" aria-label="add" className={classes.addRecipe}>
          <AddIcon />
      </Fab>
    </Link>
    </>
  )
}

export default Recipes
