import * as ActionTypes from '../actionTypes';


const initialState = {
    catagories: [],
    selectedCatagorieName: '',
    selectedCatagorieId: ''
}

export const catagoriesTab = (state= initialState, action={} ) => {
    switch(action.type) {
        case ActionTypes.FETCH_CATAGORIES_TAB_SUCCESS:
            return {
                ...state,
                catagories: action.payload.catagories.category_list,
                selectedCatagorieName: action.payload.catagories.category_list[0].category_name,
                selectedCatagorieId: action.payload.catagories.category_list[0].category_id
            }
        case ActionTypes.SET_SELECTED_CATAGORIE_ID_AND_NAME:
            return {
                ...state,
                selectedCatagorieName: action.payload.selectedCatagorieName,
                selectedCatagorieId: action.payload.selectedCatagorieId

            }
        default: {
            return state;
        }
    }
}