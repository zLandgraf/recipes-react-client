import { IRecipe } from '../../Models'
import { Grid, makeStyles } from '@material-ui/core'
import { FloatButton } from '../Common'
import { RecipesCards } from './RecipesCards'

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    padding: theme.spacing(8, 12, 8, 12),
  },
}))

type Props = {
  recipes: IRecipe[],
  loading: boolean,
  handleAddToShoppingList: Function,
}

const Home = ({ recipes, loading, handleAddToShoppingList }: Props) => {
  const theme = useStyles();
  return (
    <>
      <Grid container spacing={8} justify='center' className={theme.cardsContainer}>
        <RecipesCards
          Recipes={recipes}
          Loading={loading}
          HandleAddToShoppingList={handleAddToShoppingList} />
      </Grid>
      <FloatButton />
    </>
  )
}

export default Home;

