import { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core"
import { Link } from "react-router-dom";
import { HomeRoute } from "../Routes/Routes";
import { FormTheme } from "./AddRecipeTheme";

interface props {
  Name: string,
  HandleChange: Function
  HandleNext: Function,
}

export const FirstStep = (props : props) => {
  const theme = FormTheme();
  const {Name, HandleChange, HandleNext} = props;
  const [error, setError] = useState<string>('');

  const Validade = () => {
    if(Name.trim().length !== 0) {
       HandleNext();  
    } else {
      setError("Name is required")
    }
  }

  return (
    <Grid container direction="column" spacing={8}>
      <Grid item xs={12}>
        <TextField
          label="Name"
          name="name"
          value={Name}
          onChange={(e)=> HandleChange(e)}
          error={error.length > 0}
          helperText={error}
          variant="outlined"
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
          onClick={() => Validade()}> Next 
        </Button>
      </Grid>
    </Grid>
  )
}
