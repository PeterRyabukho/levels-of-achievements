import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PercentageTextInputWithSlider } from '../input-with-slider';
import { TabPanel } from '../ui-kit/tab-panel';
import { SelectMedium } from '../ui-kit/select';
import { FieldsContext } from '../../context/fields-context';
import { ADD_FEDERAL_PROJECT_TAB, SET_SPECIFIC_DEPARTMENTAL_PROJECT, SET_SPECIFIC_STRUCTURAL_ELEMENT } from '../../context/fields-context-actions';
import { IndicatorsAndActivitiesTabs } from './indicators-and-activities-tabs';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import InWorkChip from '../ui-kit/in-work-chip';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const CustomTab = styled(Tab)(({ theme }) => ({
    ...theme.typography.body2,
    selected: {
        backgroundColor: 'green',  // Change the background color for the selected tab
      },
  }));

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

export function InteractiveFederalProjectsTabs() {
    const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(1);
  const { state, dispatch } = React.useContext(FieldsContext);

  React.useEffect(() => {
    dispatch({type: ADD_FEDERAL_PROJECT_TAB, payload: value});
  }, [value, dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const specific_structural_elements_options = [
    {
        label: "Нет",
        id: 0,
    },
    {
        label: "Федеральный Проект",
        id: 1,
        disabled: true,
    },
    {
        label: "Ведомственный Проект",
        id: 2,
    },
    {
        label: "Комплексы Процессных Мероприятий",
        id: 3,
        disabled: true,
    },
  ];

  const SPECIFIC_DEPARTMENTAL_PROJECT = [
        {
            label: "Нет",
            id: 0,
        },
        {
            label: "Проект-1",
            id: 1,
        },
        {
            label: "Проект-2",
            id: 2,
            disabled: true,
        },
  ];

  const hanldeSpecificStructuralSelect = React.useCallback((value: string) => {
    dispatch({type: SET_SPECIFIC_STRUCTURAL_ELEMENT, payload: value});
  }, [dispatch]);

  const handleSpecificDepartmentalSelect = React.useCallback((value: string) => {
    dispatch({type: SET_SPECIFIC_DEPARTMENTAL_PROJECT, payload: value});
  }, [dispatch]);

  console.log('state: ', state);

  return state.govermentProject ? (
    <Box sx={{width: 640, marginTop: '20px' }}>
      <AppBar position="static" elevation={8} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.tabs}
        >
          <CustomTab label="Показатели ГП" {...a11yProps(0)} className={classes.tab} />
          <CustomTab label="Структурные элементы" {...a11yProps(1)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <InWorkChip />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container justifyContent="center" sx={{ marginTop: '10px' }} >
            <SelectMedium
                options={specific_structural_elements_options}
                label='Конкретный структурный элемент'
                onValueSelected={hanldeSpecificStructuralSelect}
            />
            {state.specificStructuralElement ? (
                <SelectMedium
                    options={SPECIFIC_DEPARTMENTAL_PROJECT}
                    label='Конкретный Ведомственный Проект'
                    onValueSelected={handleSpecificDepartmentalSelect}
                />
            ) : <></>}
            {state.specificDepartmentalProject ? (
                <IndicatorsAndActivitiesTabs />
            ): <></>}
            </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  ) : <></>;
}
