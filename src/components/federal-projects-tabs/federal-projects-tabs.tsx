import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FieldsContext } from '../../context/fields-context';

interface Option {
    value: string,
    label: string;
}

export function FederalProjectsTabs() {
  const { state, dispatch } = React.useContext(FieldsContext);
  const [value, setValue] = React.useState<string>('1');

  console.log('state: ', state);

  const FEDERAL_PROJECT_OPTIONS: Option[] = [
    {
        value: '1',
        label: 'ФП'
    },
    {
        value: '2',
        label: 'ФП вне НП'
    },
    {
        value: '3',
        label: 'ВП'
    },
    {
        value: '4',
        label: 'КПМ'
    },
  ]

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return state.govermentProject ? (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {FEDERAL_PROJECT_OPTIONS.map(option => (
            <Tab value={option.value} label={option.label} key={option.value} />
        ))}
      </Tabs>
    </Box>
  ) : <></>;
}
