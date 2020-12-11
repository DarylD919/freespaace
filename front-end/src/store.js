import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { basketReducer } from './reducers/basketReducers';

import { productListReducer, productDetailReducer } from './reducers/productReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo') 
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    basket:{
        basketItems: localStorage.getItem('basketItems')
        ? JSON.parse(localStorage.getItem('basketItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {}
    },
};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    basket: basketReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnchancer(applyMiddleware(thunk))
);

export default store;