import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import backgroundImage from '../../header.png';

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
  },
  title: {
    color: '#ffffff', // Set text color for the title
  },
}));

export const PageHeaderWithBackgroundImage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography variant="h3" className={classes.title}>
        Page Header
      </Typography>
    </Box>
  );
};
