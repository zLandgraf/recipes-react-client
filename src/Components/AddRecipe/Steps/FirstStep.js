import React from 'react'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  linkButton:{
    textDecoration:"none",
    marginRight: theme.spacing(2),
  }
}));

const FirstStep = ({CurrentName, MoveNext, ChooseRecipeName}) => {
  const [name, setName] = useState(CurrentName);
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    ChooseRecipeName(name);
    MoveNext();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={8}>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              label="Name"
              value={name} 
              name="name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className={classes.buttons}>
            <Link to="/" className={classes.linkButton}>
              <Button 
                type="submit"
                size="large"
                variant="contained" >Back
              </Button>
            </Link>
            <Button 
              type="submit"
              size="large"
              variant="contained" 
              color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default FirstStep;

