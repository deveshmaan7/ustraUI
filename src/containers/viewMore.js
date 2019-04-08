import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as ActionTypes from '../actionTypes';
import {DropdownButton,MenuItem,ButtonGroup,Button} from 'react-bootstrap';
import axios from "axios";
import MediaQuery from "react-responsive";


const mapStateToProps = (state) => {
    return {
        isViewMore: state.viewMore.isViewMore,
        catagories: state.catagoriesTab.catagories,
        selectedCatagorieId: state.catagoriesTab.selectedCatagorieId,
        selectedCatagorieName: state.catagoriesTab.selectedCatagorieName
    }
}

class ViewMore extends Component {

    constructor(props) {
        super(props);
        this.changeViewMore = this.changeViewMore.bind(this)
        this.renderSelectCatagoryBtn = this.renderSelectCatagoryBtn.bind(this)
        this.getSelectedProducts = this.getSelectedProducts.bind(this)
    }


    getSelectedProducts(catagorie){
        // fetch the product list of selected catagorie tab by user

        axios.get('https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1', {
            params: {
                category_id: catagorie.category_id
            }
        })
            .then((response) => {
                console.log(JSON.stringify(response.data.products));
                this.props.dispatch(
                    {
                        type: ActionTypes.FETCH_PRODUCT_SUCCESS,
                        payload: {
                            productList: response.data.products
                        }

                    })
            })
            .catch(function (error) {
                console.log(error);
            });


        this.props.dispatch(
            {
                type:ActionTypes.SET_SELECTED_CATAGORIE_ID_AND_NAME,
                payload: {
                    selectedCatagorieId: catagorie.category_id,
                    selectedCatagorieName: catagorie.category_name
                }
            })
    }

    changeViewMore(){
        console.log(this.props.isViewMore)
        this.props.dispatch({
            type: ActionTypes.CHANGE_IS_VIEW_MORE_STATE,
            payload: {
                isViewMore: !this.props.isViewMore
            }
            })
        }

        renderSelectCatagoryBtn() {
        let title = `${this.props.selectedCatagorieName}\u00A0\u00A0`

           return(
               <div>
               <MediaQuery query="(min-width: 1025px)">
               <div className="w-100-l w-100-m w-100-ns">
               <ButtonGroup justified>
                   <DropdownButton
                       dropup
                        noCaret
                       title={title}
                       key={this.props.selectedCatagorieId}
                       id={this.props.selectedCatagorieId}
                   >
                       {
                           this.props.catagories.map((catagorie) => {
                               return (

                                   <MenuItem
                                       eventKey={catagorie.category_id}
                                       onSelect={() =>this.getSelectedProducts(catagorie)}
                                   >{catagorie.category_name}</MenuItem>
                               )
                           })

                       }
                   </DropdownButton>

                       {
                       // If isViewMore === false then [+] view more button display
                       this.props.isViewMore === false ?
                           <ButtonGroup>
                            <Button onClick={this.changeViewMore}>[+] view more</Button>
                           </ButtonGroup>
                               :
                           // If isViewMore === true then [-] view less button display
                           <ButtonGroup>
                            <Button onClick={this.changeViewMore}>[-] view less</Button>
                           </ButtonGroup>
                               }
               </ButtonGroup>
               </div>
               </MediaQuery>
                   <MediaQuery query="(min-width: 768px) and (max-width: 1024px)">
                       <div className="w-100-l w-100-m w-100-ns">
                           <ButtonGroup justified>
                               <DropdownButton
                                   dropup
                                   noCaret
                                   title={title}
                                   key={this.props.selectedCatagorieId}
                                   id={this.props.selectedCatagorieId}
                               >
                                   {
                                       this.props.catagories.map((catagorie) => {
                                           return (

                                               <MenuItem
                                                   eventKey={catagorie.category_id}
                                                   onSelect={() =>this.getSelectedProducts(catagorie)}
                                               >{catagorie.category_name}</MenuItem>
                                           )
                                       })

                                   }
                               </DropdownButton>

                               {
                                   // If isViewMore === false then [+] view more button display
                                   this.props.isViewMore === false ?
                                       <ButtonGroup>
                                           <Button onClick={this.changeViewMore}>[+] view more</Button>
                                       </ButtonGroup>
                                       :
                                       // If isViewMore === true then [-] view less button display
                                       <ButtonGroup>
                                           <Button onClick={this.changeViewMore}>[-] view less</Button>
                                       </ButtonGroup>
                               }
                           </ButtonGroup>
                       </div>
                   </MediaQuery>
                   <MediaQuery query="(max-width: 767px)"   >
                       <div className="w-100-l w-100-m w-100-ns ">
                           <ButtonGroup justified className="f2 f2-ns">
                               <DropdownButton
                                   dropup
                                   noCaret
                                   title={title}
                                   key={this.props.selectedCatagorieId}
                                   id={this.props.selectedCatagorieId}
                               >
                                   {
                                       this.props.catagories.map((catagorie) => {
                                           return (

                                               <MenuItem
                                                   eventKey={catagorie.category_id}
                                                   onSelect={() =>this.getSelectedProducts(catagorie)}
                                               >{catagorie.category_name}</MenuItem>
                                           )
                                       })

                                   }
                               </DropdownButton>

                               {
                                   // If isViewMore === false then [+] view more button display
                                   this.props.isViewMore === false ?
                                       <ButtonGroup>
                                           <Button onClick={this.changeViewMore}>[+] view more</Button>
                                       </ButtonGroup>
                                       :
                                       // If isViewMore === true then [-] view less button display
                                       <ButtonGroup>
                                           <Button onClick={this.changeViewMore}>[-] view less</Button>
                                       </ButtonGroup>
                               }
                           </ButtonGroup>
                       </div>
                   </MediaQuery>
               </div>
           )
        }

    render() {
        return (
            <div>
                {this.renderSelectCatagoryBtn()}
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(ViewMore);