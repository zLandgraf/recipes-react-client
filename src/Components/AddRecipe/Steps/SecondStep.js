import React from 'react'
import { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const SecondStep = ({CurrentIngredients, MoveNext, MoveBack, ChooseIngredients }) => {
  const [options, setOptions] = useState([]);
  const [choosenIngredients, setChoosenIngredients] = useState([...CurrentIngredients]);
  const classes = useStyles();

  useEffect(() => 
  {
    const fetchIngredients = async () => 
    {
      await fetch('https://localhost:44348/api/ingredient')
      .then(async (response) => 
      {
        if(response.ok)
        {
          let data = await response.json();
          setOptions(data);
        }
      });
    };

    fetchIngredients();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    ChooseIngredients(choosenIngredients);
    MoveNext();
  }

  return (
    <>  
      <form onSubmit={handleSubmit}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
           <Autocomplete
                multiple
                options={options}
                defaultValue={CurrentIngredients}
                getOptionLabel={(option) => option.name}
                onChange={(event, option) => setChoosenIngredients([...option])}
                renderInput={(params) => (
                  <TextField
                    {...params} 
                    label="Ingredients"
                    variant="outlined" 
                  />
                )}
              />
          </Grid>
          <Grid item xs={12} className={classes.buttons}>
            <Button
              className={classes.button} 
              variant="contained" 
              size="large"
              onClick={() => MoveBack()}> 
              Back 
            </Button>
            <Button
              className={classes.button} 
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
export default SecondStep;

