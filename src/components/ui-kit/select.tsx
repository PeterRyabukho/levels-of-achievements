import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Option = {
    label: string;
    id: number;
    disabled?: boolean;
}

interface Props {
    label: string;
    options: Option [];
    onValueSelected: (value: string) => void;
}
export function SelectMedium({
    label,
    options,
    onValueSelected,
}: Props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    onValueSelected(event.target.value);
  };

  return (
    <FormControl sx={{ margin: '20px 20px 0 20px', minWidth: 400 }} size="medium">
      <InputLabel id="demo-select-small-label" color="success" >{label}</InputLabel>
      <Select
        labelId={`demo-select-small-label-${label}`}
        id={`demo-select-small-label-${label}`}
        value={value}
        label={label}
        color="success"
        onChange={handleChange}
      >
        {options.map((option: Option) => (
            <MenuItem
              value={option.id}
              key={option.id}
              disabled={option?.disabled}
            >
              {option.label}
            </MenuItem>
        ))}
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  );
}
