import * as ActionTypes from '../actionTypes';


const initialState = {
    isViewMore: false
}

export const viewMore = (state= initialState, action={} ) => {
    switch(action.type) {
        case ActionTypes.CHANGE_IS_VIEW_MORE_STATE:
            return {
                ...state,
                isViewMore: action.payload.isViewMore
            }
        default: {
            return state;
        }
    }
}