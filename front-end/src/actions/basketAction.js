import Axios from "axios"
import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM } from "../constant/basketConstant";

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
            qty,
        },
    });
    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems));
};


export const removeFromBasket = (productId) => (dispatch, getState) => {
    dispatch({type: BASKET_REMOVE_ITEM, payload: productId});
    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems));
}