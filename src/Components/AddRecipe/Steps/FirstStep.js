import React from 'react'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const FirstStep = ({CurrentName, ChangeStep, ChooseRecipeName}) => {
  const [name, setName] = useState(CurrentName);
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    ChooseRecipeName(name);
    ChangeStep('firstStep', 'secondStep');
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Choose a name for the recipe
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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

