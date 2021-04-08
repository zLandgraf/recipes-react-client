import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core"
import { ICreateIngredient } from "../../Models/Recipe";
import { Success } from "../Common/Success";
import { IngredientForm } from "./IngredientForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
    padding: '2em 3em 2em 3em',
  },
}));

export const AddIngredient = () => {
  const theme = useStyles();
  const[ingredient, setIngredient] = useState<ICreateIngredient>({name: ''});
  const[error, setError] = useState<string>('');
  const[created, setCreated] = useState<boolean>(false);

  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if(e.currentTarget.value.trim().length === 0) {
       setError('Name is required');
    }else{
      setError('');
    }
    setIngredient({...ingredient, name : e.currentTarget.value});
  }

  const handleFinish = async () => {
    if(!error) {
      let response = await fetch('https://localhost:44348/api/ingredient', {
        method: 'post',
        body:JSON.stringify(ingredient),
        headers:{
          "Content-Type": "application/json"
        }
      });
      
      if(response.ok)
        setCreated(true);
    }
  }
  
  const handleAddNewOne = () => {
    setCreated(false);
    setIngredient({...ingredient, name: ''});
  }

  return (
     <Grid container justify='center'>
      <Grid item xs={4}>
        <Paper className={theme.paper}>
        { created 
          ? <Success HandleAddNewOne={handleAddNewOne} SuccessMessage={"Ingredient Created"}/> 
          : <IngredientForm 
              Ingredient={ingredient}
              Error={error}
              HandleChange={handleChange} 
              HandleFinish={handleFinish}/>
        }
        </Paper>
      </Grid>
    </Grid>
  )
}