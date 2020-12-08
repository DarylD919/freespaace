import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addToBasket } from '../actions/basketAction';

function Basket(props) {
    const productId = props.match.params.id
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToBasket(productId, qty));
        }

    }, [dispatch, productId, qty]);
    return (
        <div>
            <h1>Basket</h1>
    <p>ADD TO BASKET : ProductID: {productId} Qty:{qty}</p>
        </div>
    )
}

export default Basket
