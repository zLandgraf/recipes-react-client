import { CssBaseline, ThemeProvider} from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../Layout/Navbar/Navbar';
import { AddAppRoutes } from '../Routes/Routes';
import { AppTheme } from './AppTheme';

export function App() {
  return (
    <Router>
      <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <Navbar />
        <AddAppRoutes />
      </ThemeProvider>
    </Router>
  )
}

export default App;