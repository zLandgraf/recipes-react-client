import React, { useState } from "react";
import { Grid, Paper, LinearProgress, makeStyles } from "@material-ui/core";
import { ICreateIngredient } from "../../Models/";
import { Success } from "../Common";
import { IngredientForm } from "./IngredientForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '2em 3em 2em 3em',
  },
  formContainer: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
  }
}));

const AddIngredient = () => {
  const theme = useStyles();
  const [ingredient, setIngredient] = useState<ICreateIngredient>({ name: '' });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [created, setCreated] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.currentTarget.value.trim().length === 0) {
      setError('Name is required');
    } else {
      setError('');
    }
    setIngredient({ ...ingredient, name: e.currentTarget.value });
  }

  const handleFinish = async () => {
    if (!error) {
      setLoading(true);
      let response = await fetch('https://localhost:44348/api/ingredient', {
        method: 'post',
        body: JSON.stringify(ingredient),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok)
        setCreated(true);
    }
    setLoading(false);
  }

  const handleAddNewOne = () => {
    setCreated(false);
    setIngredient({ ...ingredient, name: '' });
  }

  return (
    <Grid container justify='center'>
      <Grid item xs={4} className={theme.formContainer}>
        {loading && <LinearProgress />}
        <Paper className={theme.paper}>
          {created
            ? <Success HandleAddNewOne={handleAddNewOne} SuccessMessage={"Ingredient Created"} />
            : <IngredientForm
              Ingredient={ingredient}
              Loading={loading}
              Error={error}
              HandleChange={handleChange}
              HandleFinish={handleFinish} />
          }
        </Paper>
      </Grid>
    </Grid>
  )
}

export default AddIngredient;