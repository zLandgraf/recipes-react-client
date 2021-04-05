import { FormTheme } from "../AddRecipeTheme";
import { Grid, Button, CardMedia } from '@material-ui/core'

interface props {
  HandleFinish: Function,
  HandleBack: Function,
}

export const FourthStep = (props:props) => {
  const theme = FormTheme();
  const {HandleFinish, HandleBack} = props;
  
  return (
    <>
      <Grid container justify='center'>
        <Grid item xs={6}>
          <CardMedia image='https://source.unsplash.com/random' className={theme.cardMedia} /> 
        </Grid>
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
          onClick={() => HandleFinish()}
          > 
          Next 
        </Button>
      </Grid>
    </>
  )
}
