import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as ActionTypes from '../actionTypes';
import Card from '../components/catagoryTab/card'


class CatagoriesTab extends Component {

    componentDidMount() {

        // fetch list of all categories, along with all the products in the first category

        this.props.dispatch({type:ActionTypes.FETCH_CATAGORIES_TAB})
    }

    render() {
        return (
            <Card/>
        )

    }
}

export default connect()(CatagoriesTab);