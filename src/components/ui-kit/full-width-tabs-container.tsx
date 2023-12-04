import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PercentageTextInputWithSlider } from '../input-with-slider';
import { TabPanel } from './tab-panel';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface Option {
  value: number,
  label: string;
  component: JSX.Element;
}

interface Props {
  options: Option [],
}

export function FullWidthTabsContainer({options}: Props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  console.log('options: ', options);
  

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {options.map(option => (
            <Tab label={option.label} {...a11yProps(option.value)} />
          ))}
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
          {options.map(option => (
              <TabPanel value={value} index={option.value} dir={theme.direction}>
                <PercentageTextInputWithSlider fieldLabel='Hi' defaultValue={40} />
                {/* {option.component} */}
              </TabPanel>
          ))}
        {/* <TabPanel value={value} index={0} dir={theme.direction}>
          <PercentageTextInputWithSlider fieldLabel='Hi' defaultValue={40} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel> */}
      </SwipeableViews>
    </Box>
  );
}
