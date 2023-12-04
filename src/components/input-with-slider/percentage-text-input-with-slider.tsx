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
    defaultValue: number;
    onInputValueChange?: (value: string) => void;
}

export function PercentageTextInputWithSlider({
    fieldLabel,
    defaultValue,
    onInputValueChange,
}: Props) {
  const [sliderValue, setSliderValue] = React.useState<number | number[]>(defaultValue); // Initial slider value
  const [inputValue, setInputValue] = React.useState(`${defaultValue}`); // Initial text input value

  const handleParse = (val: string) => {
        return msk.fit(val, '999') || undefined;
    };

  React.useEffect (() => {
    if (onInputValueChange) {
      onInputValueChange(inputValue);
    }
  }, [inputValue, onInputValueChange])

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue);
    setInputValue(newValue.toString()); // Update the text input value
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;



    const parsedValue = handleParse(value) || '';
    console.log('parsedValue', parsedValue);

    setInputValue(parsedValue);
    setSliderValue(parsedValue === '' ? 0 : Number(parsedValue)); // Update the slider value
  };

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        margin: '30px 0 30px 0'
      }}>
      <TextField
        key={`textField- ${fieldLabel}`}
        label={fieldLabel}
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        style={{ width: 350 }}
        inputProps={{ min: 0, max: 100 }}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
      <StyledSlider
        key={`styledSlider- ${fieldLabel}`}
        value={sliderValue}
        onChange={handleSliderChange}
        min={0}
        max={100}
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
      </Box>
    </Box>
  );
}
