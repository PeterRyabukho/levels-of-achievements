import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PercentageTextInputWithSlider } from '../input-with-slider';
import { TabPanel } from '../ui-kit/tab-panel';
import { SelectMedium } from '../ui-kit/select';
import { FieldsContext } from '../../context/fields-context';
import { ADD_FEDERAL_PROJECT_TAB, SET_SPECIFIC_DEPARTMENTAL_PROJECT, SET_SPECIFIC_STRUCTURAL_ELEMENT } from '../../context/fields-context-actions';
import { LevelOfAchievementContext } from '../../context/level-of-achievement-context';
import { SET_INDICATOR_ONE, SET_INDICATOR_THREE, SET_INDICATOR_TWO } from '../../context/level-of-achievement-context-actions';
import InWorkChip from '../ui-kit/in-work-chip';
import { Button, TextField } from '@mui/material';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    tabs: {
        backgroundColor: '#4496b0',
    },
    tab: {
        selected: {
            сolor: 'green',  // Change the background color for the selected tab
          },
        '&:hover': {
            backgroundColor: '#3daed2',  // Change color on hover
        },
      },
  }));

interface Option {
  value: number,
  label: string;
  component: JSX.Element;
}

interface Props {
  options: Option [],
}

export function IndicatorsAndActivitiesTabs() {
    const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { state: loaState, dispatch: loaDispatch } = React.useContext(LevelOfAchievementContext)
  const [event1, setEvent1] = React.useState('');
  const [event2, setEvent2] = React.useState('');

  const handleSubmit = (event: any) => {
      event.preventDefault();
      // Здесь вы можете обработать данные формы
      console.log('Мероприятие 1:', event1);
      console.log('Мероприятие 2:', event2);
  };

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const hanldeIndicatorOneChange = React.useCallback((value: string) => {
    loaDispatch({type: SET_INDICATOR_ONE, payload: Number(value)});
  }, [loaDispatch]);

  const hanldeIndicatorTwoChange = React.useCallback((value: string) => {
    loaDispatch({type: SET_INDICATOR_TWO, payload: Number(value)});
  }, [loaDispatch]);

  const hanldeIndicatorThreeChange = React.useCallback((value: string) => {
    loaDispatch({type: SET_INDICATOR_THREE, payload: Number(value)});
  }, [loaDispatch]);

  console.log('loaState: ', loaState);

  return (
    <Box sx={{width: 640, marginTop: '20px' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.tabs}
        >
          <Tab label="Показатели" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Мероприятия" {...a11yProps(1)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <PercentageTextInputWithSlider
                fieldLabel='Показатель 1'
                defaultValue={80}
                onInputValueChange={hanldeIndicatorOneChange}
            />
            <PercentageTextInputWithSlider
                fieldLabel='Показатель 2'
                defaultValue={50}
                onInputValueChange={hanldeIndicatorTwoChange}
            />
            <PercentageTextInputWithSlider
                fieldLabel='Показатель 3'
                defaultValue={100}
                onInputValueChange={hanldeIndicatorThreeChange}
            />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <form onSubmit={handleSubmit}>
                <TextField
                    label="Мероприятие-1"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={event1}
                    onChange={(e) => setEvent1(e.target.value)}
                />
                <TextField
                    label="Мероприятие-2"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={event2}
                    onChange={(e) => setEvent2(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Отправить
                </Button>
            </form>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
