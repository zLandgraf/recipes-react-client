import { makeStyles } from '@material-ui/core/styles'

export interface FloatButtonTheme{
  [key:string] : any,
}

export const FloatButtonTheme = makeStyles<FloatButtonTheme>((theme) => ({
  root: {
    position:'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}))