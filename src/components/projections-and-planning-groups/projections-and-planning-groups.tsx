import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export function ProjectionsAndPlanningGroups() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const PROJECTIONS_AND_PLANNING_OPTIONS: Option [] = [
    {
      label: "Планирование",
      value: '1'
    },
    {
      label: "Прогноз мнение ЦПМ",
      value: '2',
      disabled: true,
    },
    {
      label: "Прогноз мнение ИИ",
      value: '3',
      disabled: true,
    },
  ]

  return (
    <Grid container justifyContent="center" >
    <FormControl>
      <RadioGroup
        row
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{margin: '10px 0px'}}
      >
        {PROJECTIONS_AND_PLANNING_OPTIONS.map(option => (
                <Item key={option.value} elevation={6} sx={{marginRight: '5px'}}>
                  <FormControlLabel
                    labelPlacement="start"
                    value={option.value}
                    control={<Radio color="success" />}
                    label={option.label}
                    sx={{marginRight: '5px'}}
                    disabled={option?.disabled}
                  />
                </Item>
        ))}
      </RadioGroup>
    </FormControl>
    </Grid>
  );
}
