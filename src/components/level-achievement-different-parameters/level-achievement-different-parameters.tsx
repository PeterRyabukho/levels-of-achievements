import React from 'react';
import { Grid, TextField, Paper, Typography, CardHeader  } from '@mui/material';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {Info} from '@mui/icons-material';
import { LevelOfAchievementContext } from '../../context/level-of-achievement-context';
import { AnimatedFlipDigit } from '../ui-kit/animated-flip-digit-component';

export default function IconChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<Info />} label="Сводная информация" variant="outlined" sx={{fontSize: '20px'}} />
    </Stack>
  );
}

const setValueColor = (percentage: number, setter: (value: React.SetStateAction<string>) => void) => {
    if (percentage <= 30) {
        setter('#c30944');
      } else if (percentage >= 31 && percentage <= 69) {
        setter('#cac309');
      } else if (percentage >= 70 && percentage <= 100) {
        setter('#23ca09');
      }
}

export const LevelAchievementDifferentParameters = () => {
    const { state, dispatch } = React.useContext(LevelOfAchievementContext);
    const {indicators: {indicatorOne, indicatorTwo, indicatorThree}} = state;
    const [loaGovermentProject, setLoaGovermentProject] = React.useState(indicatorOne || 0);
    const [loaStructuralElement, setLoaStructuralElement] = React.useState(indicatorTwo || 0);
    const [loaDepartmentalProject, setLoaDepartmentalProject] = React.useState(indicatorThree || 0);

    const [govermentProjectColor, setGovermentProjectColor] = React.useState('black');
    const [structuralElementColor, setStructuralElementColor] = React.useState('black');
    const [departmentalProjectColor, setDepartmentalProjectColor] = React.useState('black');

    console.log('LevelOfAchievementContext, state: ', state);

    React.useEffect(() => {
        setLoaGovermentProject(indicatorOne || 0);
        setLoaStructuralElement(indicatorTwo || 0);
        setLoaDepartmentalProject(indicatorThree || 0);
    }, [indicatorOne, indicatorTwo, indicatorThree])
    
    React.useEffect(() => {
        if (loaGovermentProject >= 0) {
            setValueColor(loaGovermentProject, setGovermentProjectColor);
          }
          if (loaStructuralElement >= 0) {
            setValueColor(loaStructuralElement, setStructuralElementColor);
          }
          if (loaDepartmentalProject >= 0) {
            setValueColor(loaDepartmentalProject, setDepartmentalProjectColor);
          }
    }, [loaGovermentProject, loaStructuralElement, loaDepartmentalProject]);

    const LOA_FIELDS_OPTIONS = React.useMemo(() => [
    {
        label: 'УД Государственного проекта',
        value: loaGovermentProject,
        color: govermentProjectColor,
    },
    {
        label: 'УД Структурного элемента',
        value: loaStructuralElement,
        color: structuralElementColor,
    },
    {
        label: 'УД Ведомственного проекта',
        value: loaDepartmentalProject,
        color: departmentalProjectColor,
    },
], [
    loaGovermentProject,
    loaStructuralElement,
    loaDepartmentalProject,
    govermentProjectColor,
    structuralElementColor,
    departmentalProjectColor,
]);

    return (
        <Paper elevation={16} style={{ padding: 20, maxWidth: 400 }}>
            <Grid container justifyContent={'center'} >
                <IconChips />
            </Grid>
          <Grid container spacing={1} justifyContent="space-between">
            {LOA_FIELDS_OPTIONS.map(option => (
                    <Grid
                        item xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '15px'
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                color: '#93989d'
                            }}
                        >
                            {option.label}
                        </Typography>
                        <div style={{display: 'flex'}}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{color: option?.color}}
                            >
                                <AnimatedFlipDigit
                                    newNumber={option.value}
                                />
                            </Typography>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{color: option?.color}}
                            >
                            %
                            </Typography>
                        </div>
                    </Grid>
            ))}
          </Grid>
        </Paper>
      );
    };
