import * as ActionTypes from '../actionTypes';

export function handleProductList(response) {
   // console.log("productListttttt%%%%%===  "+JSON.stringify(response.payload.catagories.product_list.products))
        return ({
            type: ActionTypes.FETCH_PRODUCT_SUCCESS,
            payload: {
                productList: response.payload.catagories.product_list.products
            }
        })
}



