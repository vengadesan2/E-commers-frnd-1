
import {adminOrdersFail, adminOrdersRequest, adminOrdersSuccess, createOrderFail, createOrderRequest, createOrderSuccess, deleteOrderFail, deleteOrderRequest, deleteOrderSuccess, orderDetailFail, orderDetailRequest, orderDetailSuccess, updateOrderFail, updateOrderRequest, updateOrderSuccess, userOrdersFail, userOrdersRequest, userOrdersSuccess } from '../slices/orderSlice';
import axios from 'axios';

export const createOrder = order => async(dispatch) => {  
    console.log(order);
    try {
       dispatch(createOrderRequest())
    //    const config = {
    //     headers: {
    //         authorization: localStorage.getItem('token')
    //     }
    // }
       const {data} = await axios.post(`https://e-commers-back.onrender.com/api/v1/order/new`,order)
       dispatch(createOrderSuccess(data))
    } catch (error) {
        dispatch(createOrderFail(error.response.data.message))
    }
}
export const userOrders = async(dispatch) => {
    try {
       dispatch(userOrdersRequest())
    //    const config = {
    //     headers: {
    //         authorization: localStorage.getItem('token')
    //     }
    // }
       const {data} = await axios.get(`https://e-commers-back.onrender.com/api/v1/myorders`)
    //    console.log(data);
       
       dispatch(userOrdersSuccess(data))
    } catch (error) {
        dispatch(userOrdersFail(error.response.data.message))
    }
}
export const orderDetail = id => async(dispatch) => {
    try {
       dispatch(orderDetailRequest())
    //    const config = {
    //     headers: {
    //         authorization: localStorage.getItem('token')
    //     }
    // }
       const {data} = await axios.get(`https://e-commers-back.onrender.com/api/v1/order/${id}`)
       console.log(data);
       dispatch(orderDetailSuccess(data))
    } catch (error) {
        dispatch(orderDetailFail(error.response.data.message))
    }
}

export const adminOrders = async(dispatch) => {
    try {
       dispatch(adminOrdersRequest())
       const config = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }
       const {data} = await axios.get(`https://e-commers-back.onrender.com/api/v1/admin/orders`,config)
       dispatch(adminOrdersSuccess(data))
    } catch (error) {
        dispatch(adminOrdersFail(error.response.data.message))
    }
}

export const deleteOrder = id => async(dispatch) => {
    try {
       dispatch(deleteOrderRequest())
       const config = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }
       await axios.delete(`https://e-commers-back.onrender.com/api/v1/admin/order/${id}`,config)
       dispatch(deleteOrderSuccess())
    } catch (error) {
       dispatch(deleteOrderFail(error.response.data.message))
    }
}

export const updateOrder = (id, orderData)  => async(dispatch) => {
    try {
       dispatch(updateOrderRequest())
       const config = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }
       const { data} = await axios.put(`https://e-commers-back.onrender.com/api/v1/admin/order/${id}`, orderData,config)
       dispatch(updateOrderSuccess(data))
    } catch (error) {
       dispatch(updateOrderFail(error.response.data.message))
    }
}
