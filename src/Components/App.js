import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddRecipe from './AddRecipe/AddRecipe'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#f5f5f5',
    minHeight: '100vh',
    justifyContent:'center',
    padding: theme.spacing(12),
  },
  formContainer: {
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    padding: theme.spacing(5),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={6} className={classes.formContainer}>
          <AddRecipe />
        </Grid>
      </Grid>
    </>
  )
}

export default App;