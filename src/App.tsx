import React from 'react';
import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import logo from './logo.svg';
import './App.css';
import {CalculationPage} from './pages/calculation-page';
import { PageHeaderWithBackgroundImage } from './components/ui-kit/page-header';
import { PageFooterWithBackgroundImage } from './components/ui-kit/page-footer';
import { PageHeaderWithMenu } from './components/ui-kit/page-header-with-menu';

const useStyles = makeStyles((theme) => ({
  container: {
    // background: 'rgb(202,232,242)',
    background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(181,222,237,1) 100%)'
  }
}));

function App() {
  const classes = useStyles();

  return (
      <Grid className={classes.container}>
        <PageHeaderWithMenu />
        <CalculationPage />
        <PageFooterWithBackgroundImage />
      </ Grid>
  );
}

export default App;
