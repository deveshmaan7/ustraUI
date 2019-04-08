import { combineEpics } from 'redux-observable';

import {catagoriesTabEpic,resultsLoadedEpic} from './catagoriesTab';


export default combineEpics(
    catagoriesTabEpic,
    resultsLoadedEpic
)