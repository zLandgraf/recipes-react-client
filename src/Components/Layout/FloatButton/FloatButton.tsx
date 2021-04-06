import { useState } from 'react'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded'
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import KitchenIcon from '@material-ui/icons/Kitchen';
import { Link } from "react-router-dom";
import { FloatButtonTheme } from './FloatButtonTheme';
import { AddIngredientRoute, AddRecipesRoute } from '../../Routes/Routes';



const FloatButton = () => {
  const [open, setOpen] = useState(false);
  const theme = FloatButtonTheme();
  
  const actions = [
    { 
      icon: <Link to={AddRecipesRoute}><FastfoodRoundedIcon color="secondary" /></Link>,
      name: 'New Recipe',
    },
     { 
      icon: <Link to={AddIngredientRoute}><EcoOutlinedIcon color="primary" /></Link>,
      name: 'New ingredient',
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
  <>
    <SpeedDial
      className={theme.root}
      ariaLabel="SpeedDial openIcon example"
      icon={<SpeedDialIcon openIcon={<KitchenIcon />} />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  </>);
}

export default FloatButton