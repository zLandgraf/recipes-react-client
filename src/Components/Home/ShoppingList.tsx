import { Button, Grid, Paper, makeStyles, Typography } from '@material-ui/core'
import { IShoppingItems } from './Home'

const useStyles = makeStyles((theme) => ({
  root:{
    padding: theme.spacing(5),
  },
  receitasContainer:{
    minHeight: '50vh',
  },
  resumoContainer:{
    minHeight: '30vh',
  },
  receitasPaper:{
    padding: theme.spacing(2),
    height: '100%',
  },
  resumoMain:{
    borderRadius: '1rem',
    padding: theme.spacing(2),
    backgroundColor:'#f7f7f7', 
    height: '100%',
  }
}));

interface props {
  ShoppingItems: IShoppingItems[],
  HandleContinueAdding:Function, 
}

export const ShoppingList = (props:props) => {
  const theme = useStyles();
  
  return (
    <>
      <Grid container justify="center" className={theme.root} spacing={8}>
        <Grid item xs={7} className={theme.receitasContainer}>
          <Paper className={theme.receitasPaper} elevation={1}>
            <Typography variant='h5'> Lista de compra</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3} className={theme.resumoContainer}>
          <div className={theme.resumoMain}>
            <Typography variant='h5'> Resumo</Typography>
            <Button onClick={()=> props.HandleContinueAdding()}>Continue adding !</Button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}