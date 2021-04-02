import Navbar from './Navbar/Navbar'
import AddRecipe from '../AddRecipe/AddRecipe';
import Home from '../Home/Home';
import { AppTheme } from './AppTheme';
import { CssBaseline, ThemeProvider} from '@material-ui/core'
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
            <Route path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App;