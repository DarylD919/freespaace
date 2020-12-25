import Axios from "axios"
import 
    {   BASKET_ADD_ITEM, 
        BASKET_REMOVE_ITEM, 
        BASKET_SAVE_SHIPPING_ADDRESS,
        BASKET_SAVE_PAYMENT_METHOD
    } from "../constant/basketConstant";

export const addToBasket = (productId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${productId}`);

    dispatch({
        type: BASKET_ADD_ITEM,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            seller: data.seller,
            qty,
        },
    });
    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems));
};


export const removeFromBasket = (productId) => (dispatch, getState) => {
    dispatch({type: BASKET_REMOVE_ITEM, payload: productId});
    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems));
};

export const saveShippingAddress = (data) => (dispatch) =>{
    dispatch({type: BASKET_SAVE_SHIPPING_ADDRESS, payload: data});
    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({type: BASKET_SAVE_PAYMENT_METHOD, payload: data});
}