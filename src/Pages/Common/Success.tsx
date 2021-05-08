import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { HomeRoute } from '../Routes';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  linkButton: {
    textDecoration: "none",
  },
}));

interface props {
  SuccessMessage: string,
  HandleAddNewOne: Function,
}

export const Success = (props: props) => {
  const theme = useStyles();
  const { SuccessMessage, HandleAddNewOne } = props;

  return (
    <>
      <Typography color='primary' variant="h2" align="center" gutterBottom={true}>
        <CheckCircleOutlineOutlinedIcon fontSize='inherit' />
      </Typography>
      <Typography variant="h6" align="center" gutterBottom={true}>
        {SuccessMessage}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom={true}>
        Add a new one?
      </Typography>
      <Grid item xs={12} className={theme.buttons}>
        <Link to={HomeRoute} className={theme.linkButton}>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="secondary"
            className={theme.button}> No
          </Button>
        </Link>
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="primary"
          className={theme.button}
          onClick={() => HandleAddNewOne()}> Yes
        </Button>
      </Grid>
    </>
  )
}
