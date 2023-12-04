import React from 'react';
import { Grid, TextField, Paper, Typography, CardHeader  } from '@mui/material';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<AddModeratorIcon />} label="Модификаторы" variant="outlined" sx={{fontSize: '20px'}} />
    </Stack>
  );
}

export const RightPartModifiers = () => {
    const [modifiers, setModifiers] = React.useState(['']);

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newValues: string [],
    ) => {
      setModifiers(newValues);
    };

    const MODIFIERS_OPTIONS = [
        {
            label: "Сотрудники прошли обучение (+3%)",
            value: "trainedEmployees"
        },
        {
            label: "Проводится перепроверка корректности внесения и отображения отчетной информации (+5%)",
            value: "infoReview"
        },
        {
            label: "Опытный руководитель (+5%)",
            value: "experiencedManager"
        },
    ]

    return (
        <Paper elevation={16} style={{ padding: 20, maxWidth: 400 }}>
            <Grid container justifyContent={'center'} >
                <IconChips />
                <ToggleButtonGroup
                    orientation="vertical"
                    color="success"
                    value={modifiers}
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={{marginTop: '20px'}}
                >
                    {MODIFIERS_OPTIONS.map(option => (
                        <ToggleButton value={option.value}>{option.label}</ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Grid>
        </Paper>
      );
    };
