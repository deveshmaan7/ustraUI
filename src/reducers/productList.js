import * as ActionTypes from '../actionTypes';

const initialState = {
    productList: []
}

export const productList = (state= initialState, action={} ) => {
    switch(action.type) {
        case ActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                productList: action.payload.productList
            }
        default: {
            return state;
        }
    }
}