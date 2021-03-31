import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddRecipe from './AddRecipe/AddRecipe'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:'center',
    padding: theme.spacing(8),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs='6'>
          <AddRecipe />
        </Grid>
      </Grid>
    </>
  )
}

export default App;