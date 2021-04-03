import { makeStyles } from '@material-ui/core/styles'

export interface RecipesTheme{
  [key:string] : any,
}

export const RecipesTheme = makeStyles<RecipesTheme>((theme) => ({
  buttons:{
    marginTop:'2em',
  },
  cardsContainer:{
    padding: theme.spacing(8,12,8,12),
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
  floatButton: {
    position:'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(8)
  }
}))