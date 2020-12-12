import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import Basket from './Pages/basket';
import Home from './Pages/Home';
import Item from './Pages/item';
import Signin from './Pages/Signin';
import Register from './Pages/Register';
import Shipping from './Pages/Shipping';
import Payment from './Pages/Payment';
import PlaceOrder from './Pages/Placeorder';

function App() {
    const basket = useSelector((state) => state.basket);
    const { basketItems } = basket;
    const userSignin = useSelector ((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    }

  return (
      <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <Link className="brand" to="/">FreeSpace</Link>
            </div>
            <div>
                {userInfo ? (
                    <div className="dropdown">
                    <Link to="#">{userInfo.name} <i className="fas fa-caret-down"></i></Link>
                    <ul className="dropdown-content">
                        <Link to="#signout" onClick={signoutHandler}>Signout</Link>
                    </ul>
                    </div>
                    ) :(
                         <Link to="/signin">Sign In</Link>
                )}
                <Link to="/basket">Basket
                {basketItems.length > 0 && (
                    <span className="badge">{basketItems.length}</span>
                )}
                </Link>
            </div>
        </header>

        <main>
            <Route path="/basket/:id?" component={Basket}></Route> 
            <Route path="/product/:id" component={Item}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/shipping" component={Shipping}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/placeorder" component={PlaceOrder}></Route>
            <Route path="/" component={Home} exact></Route>
        </main>

        <footer className="row center">
            All rights reserved 
            Created By Daryl Darilag
        </footer>
    </div>
    </BrowserRouter>

  );
}

export default App;
