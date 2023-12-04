import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import backgroundImage from '../../header.png';
import logoImage from '../../project-logo.svg';

const useStyles = makeStyles((theme) => ({
    header: {
      background: `url(${backgroundImage})`,  // Set the background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1
    },
    title: {
      color: '#ffffff', // Set text color for the title
    },
    appBar: {
        background: `url(${backgroundImage})`
    },
    svgContainer: {
        background: `url(${logoImage}) no-repeat`,  // Set the SVG as the background
        backgroundSize: 'contain',  // Adjust the background size as needed
        height: '50px', // Set the height of the container
        display: 'flex',
        flexGrow: '0.1'
    }
  }));

export function PageHeaderWithMenu() {
    const classes = useStyles();

  return (
    <Box className={classes.header} >
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Box className={classes.svgContainer}>
        </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Система Проектного Прогнозирования 
          </Typography>
          <Button color="inherit">Войти</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
