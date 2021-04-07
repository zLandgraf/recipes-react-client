import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import { ICreateIngredient } from '../../Models/Recipe';
import { Link } from 'react-router-dom';
import { HomeRoute } from '../Routes/Routes';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';

interface props {
  Ingredient: ICreateIngredient,
  Error: string,
  HandleChange: Function,
  HandleFinish: Function,
}

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  linkButton:{
    textDecoration:"none",
  },
}));

export const IngredientForm = (props:props) => {
  const theme = useStyles();
  const {Ingredient: ingredient, Error: error, HandleChange: handleChange, HandleFinish: handleFinish} = props;
 
  return (
    <>
      <Typography color='primary' variant="h3" align="center" gutterBottom={true}>
        <EcoOutlinedIcon fontSize='inherit'/>
      </Typography>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={ingredient.name}
            onChange={(e) => handleChange(e)}
            error={error.length > 0}
            helperText={error}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={theme.buttons}>
          <Link to={HomeRoute} className={theme.linkButton}>
            <Button 
              type="submit"
              size="large"
              variant="contained"
              className={theme.button}> Back 
            </Button>
          </Link>
          <Button 
            type="submit"
            size="large"
            variant="contained" 
            color="primary"
            className={theme.button}
            onClick={() => handleFinish()}> Next 
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
