import * as ActionTypes from '../actionTypes';

export function handleCatagoriesTab(response) {
    console.log("res" + JSON.stringify(response));
    return {
        type: ActionTypes.FETCH_CATAGORIES_TAB_SUCCESS,
        payload: {
            catagories: response
        }

    }
}






