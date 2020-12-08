import Axios from "axios"
import { BASKET_ADD_ITEM } from "../constant/basketConstant";

export const addToBasket = (productId, qty) => async(dispatch, getState) =>{
    const {data} = await Axios.get(`/api/products/${productId}`);

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