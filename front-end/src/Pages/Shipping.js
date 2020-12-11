import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/basketAction';
import Checkout from '../components/Checkout';

function Shipping(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const basket = useSelector((state) => state.basket);
    const { shippingAddress } = basket;
    if(!userInfo) {
        props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postCode, setPostCode] = useState(shippingAddress.postCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({fullName, address, city, postCode, country})
        );
        props.history.push('/payment');
        //action
    }


    return (
        <div>
            <Checkout step1 step2></Checkout>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                    type="text" 
                    id="fullName" 
                    placeholder="Enter full name"
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                    required>
                    </input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                    type="text" 
                    id="address" 
                    placeholder="Enter address"
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    required>
                    </input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input 
                    type="text" 
                    id="city" 
                    placeholder="Enter City"
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    required>
                    </input>
                </div>
                <div>
                    <label htmlFor="postCode">Post Code</label>
                    <input 
                    type="text" 
                    id="postCode" 
                    placeholder="Enter Post Code"
                    value={postCode} 
                    onChange={(e) => setPostCode(e.target.value)} 
                    required>
                    </input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input 
                    type="text" 
                    id="country" 
                    placeholder="Country"
                    value={country} 
                    onChange={(e) => setCountry(e.target.value)} 
                    required>
                    </input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
            
        </div>
    )
}

export default Shipping
