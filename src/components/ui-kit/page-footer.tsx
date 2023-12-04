import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import backgroundImage from '../../header.png'; // Replace 'yourImage.png' with the actual relative path to your image

const useStyles = makeStyles((theme) => ({
  footer: {
    background: `url(${backgroundImage})`,  // Set the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '20px',
    height: '100px', // Set the desired height for the footer
  },
}));

export const PageFooterWithBackgroundImage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>

    </Box>
  );
};

