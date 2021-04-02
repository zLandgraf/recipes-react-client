import { makeStyles } from '@material-ui/core/styles'

export interface NavbarTheme {
  [key:string] : any,
}

export const NavbarTheme = makeStyles<NavbarTheme>((theme) => ({
  root:{
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textDecoration:'none',
    flexGrow: 1,
    color: '#fff'
  },
}));