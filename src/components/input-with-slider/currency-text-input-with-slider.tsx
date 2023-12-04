import * as React from 'react';
import msk from 'msk';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { StyledSlider } from '../ui-kit/slider';
import { TextField, InputLabel, OutlinedInput } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

const Input = styled(MuiInput)`
  width: 42px;
`;

interface Props {
    fieldLabel: string;
    minValue: number;
    maxValue: number;
    defaultValue: number;
    minCurrencyLabel: string;
    maxCurrencyLabel: string;
    parse?: string;
}

export function CurrencyTextInputWithSlider({
    fieldLabel,
    minValue,
    maxValue,
    defaultValue,
    minCurrencyLabel,
    maxCurrencyLabel,
    parse,
}: Props) {
  const [sliderValue, setSliderValue] = React.useState<number | number[]>(defaultValue); // Initial slider value
  const [inputValue, setInputValue] = React.useState(`${defaultValue}`); // Initial text input value

  const handleParse = (val: string) => {
    if (parse) {
      console.log('parse: ', msk.fit(val, parse));
      
        return msk.fit(val, parse) || undefined;
    }

    return val?.length === 0 ? undefined : val;
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue);
    setInputValue(newValue.toString()); // Update the text input value
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // const parsedValue = handleParse(value) || '';
    // console.log('parsedValue', parsedValue);
    
    setInputValue(value);
    setSliderValue(value === '' ? 0 : Number(value)); // Update the slider value
  };

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        margin: '50px 0 50px 0'
      }}>
      {/* <InputLabel htmlFor={`outlined-adornment-${fieldLabel}`}>Amount</InputLabel>
          <OutlinedInput
            id={`outlined-adornment-${fieldLabel}`}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
            label="fieldLabel"
            onChange={handleInputChange}
            value={inputValue}
            style={{ width: 350 }}
          /> */}
      <TextField
        label={fieldLabel}
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        style={{ width: 350 }}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
      <StyledSlider
        value={sliderValue}
        onChange={handleSliderChange}
        min={minValue}
        max={maxValue}
        step={1}
        style={{
          width: 350,
          position: 'absolute',
          top: 40
        }}
      />
      <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: 2,
          width: 350,
          paddingTop: '5px',
        }}>
        <Typography variant="body2" color="textSecondary">{minCurrencyLabel}</Typography>
        <Typography variant="body2" color="textSecondary">{maxCurrencyLabel}</Typography>
      </Box>
    </Box>
  );
}
