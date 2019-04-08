import React, {Component} from 'react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';

const mapStateToProps = (state) => {
    return {
        productList: state.productList.productList,
        isViewMore: state.viewMore.isViewMore
    }
}


class ProductList extends Component {

    constructor(props) {
        super(props);
        this.renderProductList = this.renderProductList.bind(this)
    }


    renderProductList() {
        if (this.props.productList.length !== 0) {
            console.log("inside if")

            let productLists = [];

            // if isViewMore === FALSE then only first three items will get display

            if (this.props.isViewMore === false) {
                for (let i = 0; i < 3; i++) {
                    productLists.push(this.props.productList[i])
                    console.log("first 3 ele= " + this.props.productList[i])
                }
            }
            else {
                productLists = this.props.productList
            }
            console.log("productList" + JSON.stringify(productLists))
            return (
                <section className="mw100">
                    {
                        productLists.map((product) => {
                            return (
                                <article className="bb b--black-10 pv5-ns">
                                    <div className="flex flex-row-ns flex-row-m flex-row-l">
                                        <MediaQuery query="(min-width: 1025px)">
                                            <div className="pr3 w-40 tc">
                                                <img src={product.image_urls.x240}/>
                                            </div>
                                        </MediaQuery>

                                        <MediaQuery query="(min-width: 768px) and (max-width: 1024px)">
                                                <div className="pr3 pt5 w-40 tc">
                                                    <img src={product.image_urls.x200}/>
                                                </div>
                                            </MediaQuery>
                                            <MediaQuery query="(max-width: 767px)">
                                                <div className="pr3 pt5 w-40 tc">
                                                    <img src={product.image_urls.x120}/>
                                                </div>
                                            </MediaQuery>

                                        {/*<div className="-m pr3 mb4 w-40 tc">*/}
                                            {/*<img src={product.image_urls.x200}/>*/}

                                        {/*</div>*/}
                                        {/*<div className="-l pr3 mb4 w-40 tc">*/}
                                            {/*<img src={product.image_urls.x240}/>*/}

                                        {/*</div>*/}
                                        <div className="w-60 pl3-ns pl4-m pl7-l mb4 ml2 pt5">
                                            <h1 className=" ws-normal f3 f3-ns f2-m f2-l fw5 fw5-ns lh-copy measure mt0 lh-title">{product.name}</h1>
                                                {
                                                    product.weight !== 0 ?
                                                        <p className="f5 gray">({product.weight} {product.weight_unit})</p>
                                                        :
                                                        <div></div>
                                                }
                                            <p className="f4 b pt2 lh-copy">
                                                &#8377;  {product.final_price}
                                                {
                                                    product.final_price !== product.price ?
                                                        <span
                                                            className="f5 lh-copy measure strike gray pl3 lh-copy pt4 mv0">&#8377;  {product.price}
                                                            </span>
                                                        :
                                                        <span></span>
                                                }
                                            </p>
                                            <div className="pt2">
                                                {
                                                    product.is_in_stock ?
                                                        <button
                                                            className=" f4 lh-copy measure white b bg-dark-green pv3 ph3 pv3-m ph4-m pv3-l ph4-l bn br2 hover-shadow-inner">
                                                            ADD TO CART
                                                        </button>
                                                        :
                                                        <button
                                                            className=" f4 white lh-copy measure b pv3 ph3 pv3-m ph4-m pv3-l ph4-l bg-light-silver bg-gray bn br2 hover-shadow-inner">
                                                            OUT OF STOCK
                                                        </button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </article>

                            )
                        })}

                </section>
            )
        }
        else {
            return (<div></div>)
        }

    }


    render() {
        return (
            <div>
                {this.renderProductList()}

            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(ProductList);