import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';

import { LevelAchievementDifferentParameters } from '../../../components/level-achievement-different-parameters';
import { RightPartModifiers } from '../../../components/right-part-modifiers';

export const RightPartWithCalculation = () => {
    return (
        <Grid item xs={5}>
        <Grid container direction="column">
          <Grid item>
            <LevelAchievementDifferentParameters />
          </Grid>
          <Divider flexItem sx={{margin: '30px 0'}} />
          <Grid item>
            <RightPartModifiers />
          </Grid>
        </Grid>
        </Grid>
    )
};