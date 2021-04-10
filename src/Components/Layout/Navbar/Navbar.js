import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8)
  },
  toolbar:{
    padding: theme.spacing(2)
  },
  titleContainer:{
    display:'flex',
    alignItems:'center',
  },
  menuButton: {
    color:'#fff',
    marginRight: theme.spacing(2),
  },
  title: {
    textDecoration:'none',
    color: '#fff',
  },
  teste:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.85),
      color: 'black',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2, 2, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative" color="primary" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.teste}>
            <Grid item xs={1}className={classes.titleContainer}>
              <IconButton className={classes.menuButton}>
                <MenuIcon />
              </IconButton>
              <Link to='/' className={classes.title}>
                <Typography variant="h6">
                  Receitas
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
            <Grid>
              <Button color="inherit">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}


{/*       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          */}