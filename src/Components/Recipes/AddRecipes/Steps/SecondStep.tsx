import { useEffect, useState } from "react";
import { Button, Grid, Modal } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { FormTheme } from "../AddRecipeTheme";
import { IIngredient } from "../../../../Models/Recipe";
import CircularProgress from '@material-ui/core/CircularProgress';

interface props {
  Ingredients: IIngredient[],
  HandleChooseIngredient: Function
  HandleNext: Function,
  HandleBack: Function,
}

export const SecondStep = (props:props) => {
  const theme = FormTheme();
  const {Ingredients, HandleChooseIngredient, HandleNext, HandleBack} = props;
  const [selectOptions, setSelectOptions] = useState<IIngredient[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const loading = open && selectOptions.length === 0;
  
  useEffect(() => {
    const fetchIngredients = async () => {
       const response = await fetch('https://localhost:44348/api/ingredient');
       if(response.ok) {
          const data = await response.json();
          setSelectOptions([...data.map((ingredient:any) => {
            return {
              ...ingredient,
              amount: 0,
              unit:'',
            }
          })]);
       }
    }
    fetchIngredients();
  }, [loading])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Autocomplete
          multiple
          open={open}
          onOpen={() => {setOpen(true)}}
          onClose={() => {setOpen(false)}}
          options={selectOptions}
          value={[...Ingredients]}
          loading={loading}
          getOptionLabel={(option:IIngredient) => option.name}
          onChange={(event, selectedOptions) => HandleChooseIngredient(selectedOptions)}
          getOptionSelected={(option, value) => option.id === value.id}
          renderInput={(params) => (
          <TextField
            {...params} 
            label="Ingredients"
            variant="outlined" 
            InputProps={{
              ...params.InputProps,
              endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
          ),
        }}
          />)} />
      </Grid>
      <Grid item xs={12} className={theme.buttons}>
        <Button
          className={theme.button} 
          variant="contained" 
          size="large"
          onClick={() => HandleBack()}> 
          Back 
        </Button>
        <Button
          className={theme.button} 
          type="submit"
          size="large"
          variant="contained" 
          color="primary"
          onClick={() => HandleNext()}> 
          Next 
        </Button>
      </Grid>
    </Grid>
  )
}

