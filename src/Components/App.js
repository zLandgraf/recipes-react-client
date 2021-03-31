import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AddRecipe from './AddRecipe/AddRecipe'

const useStyles = makeStyles((theme) => ({
  root: {
    height:'100vh',
    justifyContent:'center',
    padding: theme.spacing(8),
    backgroundColor: '#f5f5f5'
  },
  paper: {
    height: 'auto',
    padding: '3em 4em 3em 4em',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={8} className={classes.root}>
        <Grid item xs={5}>
          <Paper elevation={3} className={classes.paper}>
            <AddRecipe />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default App;