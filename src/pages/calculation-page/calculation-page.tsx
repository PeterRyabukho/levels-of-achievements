import * as React from 'react';
import { ContainerWithRoundedBorder } from '../../components/ui-kit/container-with-rounded-border';
import { Grid } from '@mui/material';
import { LeftPartWithFields } from './components/left-part-with-fields';
import { RightPartWithCalculation } from './components/right-part-with-calculation';
import { MyContextProvider } from '../../context/fields-context';
import { LevelOfAchievementProvider } from '../../context/level-of-achievement-context';

export const CalculationPage = () => {
    return (
        <ContainerWithRoundedBorder>
            <MyContextProvider>
                <LevelOfAchievementProvider>
                    <Grid container spacing={10} sx={{padding: '0px 50px'}}>
                        <LeftPartWithFields />
                        <RightPartWithCalculation />
                    </Grid>
                </LevelOfAchievementProvider>
            </MyContextProvider>
        </ContainerWithRoundedBorder>
    )
};
