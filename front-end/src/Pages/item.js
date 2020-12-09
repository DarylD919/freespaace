import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/rating';


function Item(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToBasketHandler = () => {
        props.history.push(`/basket/${productId}?qty=${qty}`);
    };
    return (
        <div>
        {loading ? (
        <LoadingBox></LoadingBox>
        ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
        )  :  (
       <div>
            <Link to="/">Results</Link>
            <div className="row top">
                <div className="col-2">
                    <img 
                    className="large" 
                    src={product.image} 
                    alt={product.name}>
                    </img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}/>
                        </li>
                        <li>
                            Price : £{product.price}
                        </li>
                        <li>
                            Description
                            <p>{product.description}</p>
                        </li>
                    </ul>

                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">£{product.price}</div>
                                </div>
                                </li>
                                <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                        <span className="Success">In Stock</span>
                                         ):(
                                        <span className="danger">Out of Stock</span>)}
                                    </div>
                                </div>
                            </li>
                            {
                                product.countInStock > 0 && (
                            <>
                            <li>
                                <div className="row">
                                    <div>Qty</div>
                                    <div>
                                        <select 
                                        value={qty} 
                                        onChange={(e) => setQty(e.target.value)}>
                                           {/* This shows the amount of stock available to puchase i.e 10 in stock, will show 9 */}
                                            {
                                                [...Array(product.countInStock).keys()].map ( 
                                                    (x) => (
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                ) 
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </li>
                                <li>
                                    <button 
                                    onClick={addToBasketHandler} 
                                    className="primary block">Add to Basket
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}
    </div>
);
}

export default Item
