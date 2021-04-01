import React from 'react'
import Navbar from './Navbar/Navbar'
import {ScrollTop} from './Navbar/Navbar'
import AddRecipe from './AddRecipe/AddRecipe';
import Recipes from './Recipes/Recipes';
import { 
  CssBaseline,
  Fab,
  createMuiTheme,
  ThemeProvider, 
} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    info:{
      main: '#64b5f6',
    },
    success:{
      main: '#388e3c',
    }
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
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