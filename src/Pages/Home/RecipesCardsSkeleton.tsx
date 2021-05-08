import { Card, CardActions, CardContent, Grid, makeStyles } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';

export const useStyles = makeStyles((theme) => ({
  buttons:{
    marginTop:'2em',
  },
  card:{
    height:'100%',
    display:'flex',
    flexDirection: 'column',
  },
  cardMedia:{
    paddingTop:'56.25%',
  },
  cardContent:{
    flexGrow: 1,
  },
  cardActions:{
    paddingRight:'1rem',
    display:'flex',
    justifyContent:'flex-end',
  },
}))

type Props = {
  skeletons:number,
}

const RecipesCardsSkeleton = ({ skeletons }: Props) => {
  const theme = useStyles();
  const cards = Array(skeletons).fill({});
  return (
   <>
    {cards.map((card, i) => (
        <Grid item xs={3} key={i}>
          <Card>
            <Skeleton variant='rect' className={theme.cardMedia} />
            <CardContent className={theme.cardContent}>
              <Skeleton variant='text'/>
            </CardContent>
            <CardActions className={theme.cardActions}>
              <Skeleton variant='text' width='10%'/>
            </CardActions>
          </Card>
        </Grid> 
    ))}
   </>
  )
}

export default RecipesCardsSkeleton
