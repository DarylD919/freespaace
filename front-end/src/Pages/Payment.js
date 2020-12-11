import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/basketAction';
import CheckoutSteps from '../components/Checkout'

function Payment(props) {
    const basket = useSelector((state) => state.basket);
    const { shippingAddress } = basket;
    if(!shippingAddress.address) {
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input 
                        type="radio" 
                        id="paypal" 
                        value="PayPal" 
                        name="paymentMethod" 
                        required 
                        checked onChange={(e) => setPaymentMethod(e.target.value)}>
                        </input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input 
                        type="radio" 
                        id="card" 
                        value="Card" 
                        name="paymentMethod" 
                        required 
                        onChange={(e) => setPaymentMethod(e.target.value)}>
                        </input>
                        <label htmlFor="card">Card</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}

export default Payment
