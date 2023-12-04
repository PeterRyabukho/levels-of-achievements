import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import WarningIcon from '@mui/icons-material/Warning';
import { Grid } from '@mui/material';

export default function InWorkChip() {
  return (
    <Grid container justifyContent={'center'} sx={{marginTop: '20px'}}>
        <Stack direction="row" spacing={1}>
            <Chip icon={<WarningIcon color="error" />} label="В Работе" sx={{fontSize: '20px', padding: '10px'}} />
        </Stack>
    </Grid>
  );
}