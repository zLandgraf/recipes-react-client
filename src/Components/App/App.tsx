import Navbar from '../Navbar/Navbar'
import AddRecipe from '../AddRecipe/AddRecipe';
import Recipes from '../Recipes/Recipes';
import {AppTheme} from './AppTheme';
import { 
  CssBaseline,
  ThemeProvider} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={AppTheme}>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route path="/new" component={AddRecipe} />
            <Route path="/" component={Recipes} />
            <Redirect from="*" to="/" />
          </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App;