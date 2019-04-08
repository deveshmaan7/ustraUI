import { combineReducers } from 'redux';
import {catagoriesTab} from './catagoriesTab';
import {productList} from './productList';
import {viewMore} from './viewMore';



export default combineReducers({
    catagoriesTab,
    productList,
    viewMore
});
