import { Button, makeStyles } from "@material-ui/core";
import { Grid, Paper, Typography, TextField } from "@material-ui/core"
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import { Link } from "react-router-dom";
import { RecipesPath } from "../Routes/Routes";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
    padding: '2em 3em 2em 3em',
  },
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

export const AddIngredientForm = () => {
  const theme = useStyles()
  return (
    <Grid container justify='center'>
      <Grid item xs={6}>
        <Paper className={theme.paper}>
          <Typography color='primary' variant="h3" align="center" gutterBottom={true}>
            <EcoOutlinedIcon fontSize='inherit'/>
          </Typography>
          <Grid container direction="column" spacing={8}>
            <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
            />
        </Grid>
            <Grid item xs={12} className={theme.buttons}>
            <Link to={RecipesPath} className={theme.linkButton}>
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
              className={theme.button}> Next 
            </Button>
          </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
