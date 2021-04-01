import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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

export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative" color="primary" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
           <Link to='/' className={classes.title}>
              <Typography variant="h6">
                  Receitas
              </Typography>
           </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
