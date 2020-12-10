import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBasket, removeFromBasket } from '../actions/basketAction';
import MessageBox from '../components/MessageBox';

function Basket(props) {
    const productId = props.match.params.id
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const basket = useSelector((state) => state.basket);
    const { basketItems } = basket;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToBasket(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromBasketHandler = (id) => {
        //delete
        dispatch(removeFromBasket(id));
    };

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    };
    return (
        <div className="row top">
            <div className="col-2">
                <h1>Basket</h1>
                {basketItems.length === 0 ? ( 
                <MessageBox>
                    Basket is Empty.{' '}<Link to="/">Ready to buy</Link>
                </MessageBox>
                ) :( 
                    <ul>
                        {basketItems.map((item) => (
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
                                    <select 
                                    value={item.qty} 
                                    onChange={(e) => 
                                    dispatch(
                                        addToBasket(item.product, Number(e.target.value))
                                        )
                                    }
                                        >
                                            {[...Array(item.countInStock).keys()].map ((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                    </select>
                                </div>
                                <div>
                                    £{item.price}
                                </div>
                                <div>
                                    <button 
                                    type="button" 
                                    onClick={() => removeFromBasketHandler(item.product)}>
                                    Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Total ({basketItems.reduce((a, c) => a + c.qty, 0)} items) : £
                                {basketItems.reduce((a, c) => a + c.price * c.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button 
                            type="button" 
                            onClick={checkoutHandler} 
                            className="primary block" 
                            disabled={basketItems.length === 0}>
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   );
}

export default Basket
