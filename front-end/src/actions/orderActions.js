import Axios from 'axios';
import { BASKET_EMPTY } from '../constant/basketConstant';
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constant/orderConstant";

export const createOrder = (order) => async (dispatch, getState) =>{
    dispatch({type: ORDER_CREATE_REQUEST, payload: order});
    try{
        const { userSignin: {userInfo}} = getState();
        const { data } = await Axios.post('/api/orders', order, {
            headers: 
            {
                Authorization: `Bearer ${userInfo.token}`,
            }
        });
        dispatch({type: ORDER_CREATE_SUCCESS, payload: data.order });
        dispatch({type: BASKET_EMPTY});
        localStorage.removeItem("basketItems");
    } catch (error) {
        dispatch({ type: ORDER_CREATE_FAIL,
        payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
    }
}