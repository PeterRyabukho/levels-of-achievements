import React, { Dispatch, createContext, useContext, useReducer } from 'react';
import { ADD_FEDERAL_PROJECT_TAB, ADD_GOVERMENT_PROJECT, ActionType, CLEAR_ALL_FIELDS, SET_SPECIFIC_DEPARTMENTAL_PROJECT, SET_SPECIFIC_STRUCTURAL_ELEMENT } from './fields-context-actions';

// const DEFAULT_CONTEXT = {
//     govermentProject: null,
// };

interface FieldsState {
    govermentProject: number | null;
    federalProjectTab: number | null;
    specificStructuralElement: number | null;
    specificDepartmentalProject: number | null;
}

const initialState: FieldsState = {
    govermentProject: null,
    federalProjectTab: null,
    specificStructuralElement: null,
    specificDepartmentalProject: null,
};

// Create the context
export const FieldsContext = createContext<{ state: FieldsState, dispatch: Dispatch<ActionType> }>({
    state: initialState,
    dispatch: () => null
  });

// Initial state

const reducer = (state: FieldsState, action: ActionType) => {
    switch (action.type) {
      case ADD_GOVERMENT_PROJECT:
        return { ...state, govermentProject: action.payload };
        case ADD_FEDERAL_PROJECT_TAB:
            return { ...state, federalProjectTab: action.payload };
        case SET_SPECIFIC_STRUCTURAL_ELEMENT:
            return { ...state, specificStructuralElement: action.payload };
        case SET_SPECIFIC_DEPARTMENTAL_PROJECT:
            return { ...state, specificDepartmentalProject: action.payload };
      case CLEAR_ALL_FIELDS:
        return { ...initialState };
      default:
        return state;
    }
  };
  
export const MyContextProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <FieldsContext.Provider value={{ state, dispatch }}>{children}</FieldsContext.Provider>
    );
  };