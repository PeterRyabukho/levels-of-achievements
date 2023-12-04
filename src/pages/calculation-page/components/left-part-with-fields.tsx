import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import { CurrencyTextInputWithSlider, PercentageTextInputWithSlider } from '../../../components/input-with-slider';
import { parseNumberToMoney } from '../../../utils/parse-number-to-money';
import { SelectMedium } from '../../../components/ui-kit/select';
import { FieldsContext } from '../../../context/fields-context';
import { ADD_GOVERMENT_PROJECT } from '../../../context/fields-context-actions';
import { FederalProjectsTabs } from '../../../components/federal-projects-tabs';
import { FullWidthTabsContainer } from '../../../components/ui-kit/full-width-tabs-container';
import { InteractiveFederalProjectsTabs } from '../../../components/federal-projects-tabs/interactive-federal-projects-tabs';
import { ProjectionsAndPlanningGroups } from '../../../components/projections-and-planning-groups/projections-and-planning-groups';

export const LeftPartWithFields = () => {
    const { dispatch } = React.useContext(FieldsContext);
    
    const hanldeValueSelect = React.useCallback((value: string) => {
        console.log('hanldeValueSelect, value: ', value);
        
        dispatch({type: ADD_GOVERMENT_PROJECT, payload: value});
    }, [dispatch]);

    const GOVERMENT_PROJECTS_OPTIONS = [
        {
            id: 0,
            label: 'Не выбрано',
        },
        {
            id: 1,
            label: 'Все',
            disabled: true,
        },
        {
            id: 2,
            label: 'Здравоохранение',
        },
        {
            id: 3,
            label: 'Образование',
            disabled: true,
        }
    ];

    return (
        <Grid item xs={7} >
        <Paper elevation={16} sx={{minHeight: '560px'} } >
        <Grid container justifyContent="center" >
            <ProjectionsAndPlanningGroups />
            <SelectMedium
                options={GOVERMENT_PROJECTS_OPTIONS}
                label='ГП и его наименование'
                onValueSelected={hanldeValueSelect}
            />
            <InteractiveFederalProjectsTabs />
            </Grid>
        </Paper>
      </Grid>
    )
};
