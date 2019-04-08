import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import {handleCatagoriesTab} from '../actions/catagoriesTab';
import 'rxjs/add/operator/switchMap';
import {ajax} from 'rxjs/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {handleProductList} from "../actions/productList";

export const catagoriesTabEpic = (action$) =>
    action$
        .ofType(ActionTypes.FETCH_CATAGORIES_TAB)
        .mergeMap(action =>
            ajax.getJSON(`https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob`,
                {
                    'Content-Type': 'application/json'

                })
                .map(response => handleCatagoriesTab(response))
                .catch(error => {
                    return Observable.of({
                        type: 'PROGRAM_FAILURE',
                        error
                    })
                })
        );

export const resultsLoadedEpic = (action$) =>
    action$
        .ofType(ActionTypes.FETCH_CATAGORIES_TAB_SUCCESS)
        .map((response => handleProductList(response)))