import { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { FormTheme } from "../AddRecipeTheme";
import CircularProgress from '@material-ui/core/CircularProgress';

interface props {
  HandleNext: Function,
  HandleBack: Function
}

export const SecondStep = (props:props) => {
  const theme = FormTheme();
  const [options, setOptions] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  const loading = open && options.length === 0;
  
  useEffect(() => {
    const fetchIngredients = async () => {
       const response = await fetch('https://localhost:44348/api/ingredient');
       if(response.ok) {
          const data = await response.json();
          setOptions(data);
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
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          options={options}
          loading={loading}
          getOptionLabel={(option:any) => option.name}
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
            size="large" > 
            Back 
          </Button>
          <Button
            className={theme.button} 
            type="submit"
            size="large"
            variant="contained" 
            color="primary"> 
            Next 
          </Button>
        </Grid>
    </Grid>
  )
}

