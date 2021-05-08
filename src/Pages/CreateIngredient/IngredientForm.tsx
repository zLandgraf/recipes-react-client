import { Button, CircularProgress, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import { ICreateIngredient } from '../../Models';
import { Link } from 'react-router-dom';
import { HomeRoute } from '../index';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  linkButton: {
    textDecoration: "none",
  },
  spinner: {
    marginLeft: '10px',
  }
}));

type Props = {
  Ingredient: ICreateIngredient,
  Error: string,
  Loading: boolean,
  HandleChange: Function,
  HandleFinish: Function,
}

export const IngredientForm = ({ Ingredient,
  Error,
  Loading,
  HandleChange,
  HandleFinish }: Props) => {
  const theme = useStyles();
  return (
    <>
      <Typography color='primary' variant="h3" align="center" gutterBottom={true}>
        <EcoOutlinedIcon fontSize='inherit' />
      </Typography>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={Ingredient.name}
            onChange={(e) => HandleChange(e)}
            error={Error.length > 0}
            helperText={Error}
            disabled={Loading}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} className={theme.buttons}>
          <Link to={HomeRoute} className={theme.linkButton}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              disabled={Loading}
              className={theme.button}> Back
            </Button>
          </Link>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
            className={theme.button}
            disabled={Loading}
            onClick={() => HandleFinish()}> Next {Loading ? <CircularProgress size={15} className={theme.spinner} /> : null}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
