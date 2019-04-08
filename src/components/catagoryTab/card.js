import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as ActionTypes from '../../actionTypes';
import {Carousel} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './card.css';
import axios from 'axios';
import MediaQuery from 'react-responsive';


const mapStateToProps = (state) => {
    return {
        catagories: state.catagoriesTab.catagories,
        selectedCatagorieId: state.catagoriesTab.selectedCatagorieId
    }
}

class Card extends Component {

    constructor(props) {
        super(props);
        this.getSelectedProductList = this.getSelectedProductList.bind(this);
        this.renderCards = this.renderCards.bind(this);

    }

    getSelectedProductList(catagorie) {
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
                type: ActionTypes.SET_SELECTED_CATAGORIE_ID_AND_NAME,
                payload: {
                    selectedCatagorieId: catagorie.category_id,
                    selectedCatagorieName: catagorie.category_name
                }
            })
    }


    renderCards() {
        if (this.props.catagories.length !== 0) {
            console.log("inside if")
            return (
                <div>
                    <MediaQuery query="(min-width: 1025px)">
                        <OwlCarousel
                            className="owl-theme owl-text-overlay container"
                            items="5"
                            margin={10}
                            dots={false}
                        >
                            {
                                this.props.catagories.map((catagorie) => {
                                    return (
                                        <div className="item">
                                            <img onClick={() => this.getSelectedProductList(catagorie)}
                                                 src={catagorie.category_image}/>
                                            <h3 className=" pb4 owl-title centered">{catagorie.category_name}</h3>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </MediaQuery>
                    <MediaQuery query="(min-width: 768px) and (max-width: 1024px)">
                        <OwlCarousel
                            className="owl-theme owl-text-overlay container"
                            items="4"
                            margin={10}
                            dots={false}
                        >
                            {
                                this.props.catagories.map((catagorie) => {
                                    return (
                                        <div className="item">
                                            <img onClick={() => this.getSelectedProductList(catagorie)}
                                                 src={catagorie.category_image}/>
                                            <h3 className=" f2 pb3 owl-title centered">{catagorie.category_name}</h3>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 767px)">
                        <OwlCarousel
                            className="owl-theme owl-text-overlay container"
                            items="3"
                            margin={10}
                            dots={false}
                        >
                            {
                                this.props.catagories.map((catagorie) => {
                                    return (
                                        <div className="item">
                                            <img onClick={() => this.getSelectedProductList(catagorie)}
                                                 src={catagorie.category_image}/>
                                            <h3 className="f3 pb5 owl-title centered">{catagorie.category_name}</h3>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </MediaQuery>
                </div>

            )
        }
        else return <div></div>
    }


    render() {
        return (
            <div>
                <h1 className="pl4-l pl4-m pl4-ns pl4">Our Products</h1>
                {this.renderCards()}
            </div>
        )

    }
}

export default connect(
    mapStateToProps
)(Card)