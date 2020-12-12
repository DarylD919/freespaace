import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/Checkout';

function PlaceOrder(props) {
    const basket = useSelector((state) => state.basket);
    if(!basket.paymentMethod) {
        props.history.push('/payment');
    } 

    const toPrice = (num) => Number(num.toFixed(2));
    basket.itemsPrice = toPrice(
        basket.basketItems.reduce((a, c) => a + c.qty * c.price, 0));
    
    basket.shippingPrice = basket.itemsPrice > 100? toPrice(0): toPrice(10);
    basket.taxPrice = toPrice(0.15 * basket.itemsPrice);
    basket.totalPrice = basket.itemsPrice + basket.shippingPrice + basket.taxPrice;

    const placeOrderHandler = () => {
        // to be completed
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name: </strong> {basket.shippingAddress.fullName} <br /><br />
                                    <strong>Address: </strong><br />  <br />{basket.shippingAddress.address}, <br />
                                    {basket.shippingAddress.city},<br />
                                    {basket.shippingAddress.postCode},<br />
                                    {basket.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method: </strong> {basket.paymentMethod}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Order Items</h2>
                                <ul>
                                    {basket.basketItems.map((item) => (
                                        <li key ={item.product}>
                                            <div className="row">
                                                <div>
                                                    <img 
                                                    src={item.image} 
                                                    alt={item.name} 
                                                    className="small"
                                                    ></img>
                                                </div>
                                                <div className="min-30">
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </div>
                                                <div>
                                                    {item.qty} x £{item.price} =£{item.qty * item.price}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Items</div>
                                    <div>£{basket.itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping</div>
                                    <div>£{basket.shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tax</div>
                                    <div>£{basket.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div><strong>Total:</strong></div>
                                    <div><strong>£{basket.totalPrice.toFixed(2)}</strong></div>
                                </div>
                            </li>
                            <li>
                                <button type="button" onClick={placeOrderHandler} className="primary block" disabled={basket.basketItems.length === 0}>
                                    Place Order
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
