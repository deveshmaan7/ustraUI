import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import 'rxjs/add/operator/switchMap';
import {ajax} from 'rxjs/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

