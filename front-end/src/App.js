import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import Basket from './Pages/basket';
import Home from './Pages/Home';
import Item from './Pages/item';
import Signin from './Pages/Signin';
import Register from './Pages/Register';
import Shipping from './Pages/Shipping';
import Payment from './Pages/Payment';
import PlaceOrder from './Pages/Placeorder';
import Order from './Pages/Order';
import OrderHistory from './Pages/OrderHistory';
import ProfilePage from './Pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import ProductList from './Pages/ProductList';
import ProductEdit from './Pages/ProductEdit';
import OrderList from './Pages/OrderList';

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
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/orderhistory">Order History</Link>
                        </li>
                        <li>
                            <Link to="#signout" onClick={signoutHandler}>Signout</Link>
                        </li>
                    </ul>
                    </div>
                    ) :(
                         <Link to="/signin">Sign In</Link>
                )}
                {userInfo && userInfo.isAdmin && (
                    <div className= "dropdown">
                        <Link to="#admin">Admin {' '}<i className="fas fa-caret-down"></i></Link>
                        <ul className="dropdown-content">
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/productlist">Product</Link>
                            </li>
                            <li>
                                <Link to="/orderlist">Orders</Link>
                            </li>
                            <li>
                                <Link to="/userlist">Users</Link>
                            </li>
                        </ul>
                    </div>
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
            <Route path="/product/:id" component={Item} exact></Route>
            <Route path="/product/:id/edit" component={ProductEdit} exact></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/shipping" component={Shipping}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/placeorder" component={PlaceOrder}></Route>
            <Route path="/order/:id" component={Order}></Route>
            <Route path="/orderhistory" component={OrderHistory}></Route>
            <PrivateRoute path="/profile" component={ProfilePage}></PrivateRoute>
            <AdminRoute path="/productlist" component={ProductList}></AdminRoute>
            <AdminRoute path="/orderlist" component={OrderList}></AdminRoute>
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
