import React, { Dispatch, createContext, useContext, useReducer } from 'react';
import { ADD_FEDERAL_PROJECT_TAB, ADD_GOVERMENT_PROJECT, ActionType, CLEAR_ALL_FIELDS, SET_SPECIFIC_DEPARTMENTAL_PROJECT, SET_SPECIFIC_STRUCTURAL_ELEMENT } from './fields-context-actions';
import { SET_INDICATOR_ONE, SET_INDICATOR_THREE, SET_INDICATOR_TWO } from './level-of-achievement-context-actions';

// const DEFAULT_CONTEXT = {
//     govermentProject: null,
// };

interface LevelOfAchievementState {
  indicators: {
    indicatorOne: number | null;
    indicatorTwo: number | null;
    indicatorThree: number | null;
  }
}

const initialState: LevelOfAchievementState = {
    indicators: {
      indicatorOne: null,
      indicatorTwo: null,
      indicatorThree: null,
    }
};

export const LevelOfAchievementContext = createContext<{ state: LevelOfAchievementState, dispatch: Dispatch<ActionType> }>({
    state: initialState,
    dispatch: () => null
  });

const reducer = (state: LevelOfAchievementState, action: ActionType): LevelOfAchievementState => {
    switch (action.type) {
      case SET_INDICATOR_ONE:
        return { ...state, indicators: {...state.indicators, indicatorOne: action.payload}};
      case SET_INDICATOR_TWO:
          return { ...state, indicators: {...state.indicators, indicatorTwo: action.payload}};
      case SET_INDICATOR_THREE:
          return { ...state, indicators: {...state.indicators, indicatorThree: action.payload}};
      default:
        return state;
    }
  };
  
export const LevelOfAchievementProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <LevelOfAchievementContext.Provider value={{ state, dispatch }}>{children}</LevelOfAchievementContext.Provider>
    );
  };