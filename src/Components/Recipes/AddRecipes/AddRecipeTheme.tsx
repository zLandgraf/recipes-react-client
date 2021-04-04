import { makeStyles } from '@material-ui/core/styles'

export interface FormTheme{
  [key:string] : any,
}

export const FormTheme = makeStyles<FormTheme>((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    display:'flex',
    justifyContent:'center',
    width: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
    padding: '2em 3em 2em 3em',
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  linkButton:{
    textDecoration:"none",
  },
  ingredientContainer:{
    marginTop: '2em'
  }
}));