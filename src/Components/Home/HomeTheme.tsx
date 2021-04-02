import { makeStyles } from '@material-ui/core/styles'

export interface HomeTheme{
  [key:string] : any,
}

export const HomeTheme = makeStyles<HomeTheme>((theme) => ({
  buttons:{
    marginTop:'2em',
  },
  cardsContainer:{
    padding:'4em 0 4em 0',
  },
  card:{
    height:'100%',
    display:'flex',
    flexDirection: 'column',
  },
  cardMedia:{
    paddingTop:'56.25%'
  },
  cardContent:{
    flexGrow: 1,
  },
  cardActions:{
    display:'flex',
    justifyContent:'flex-end',
  },
  addRecipe: {
    position:'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(8)
  }
}))