import { useElements, useStripe } from "@stripe/react-stripe-js"
import { CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";
import { orderCompleted } from "../../slices/cartSlice";
import {validateShipping} from '../cart/Shipping';
import {createOrder} from '../../actions/orderActions'
import { clearError as clearOrderError } from "../../slices/orderSlice";
import AxiosService from "../../utils/AxiosService";
export default function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const orderInfo = JSON.parse(localStorage.getItem('orderInfo'))    
    const { name} = useSelector(state => state.authState)
    const {items:cartItems, shippingInfo } = useSelector(state => state.cartState)
    const { error:orderError } = useSelector(state => state.orderState)
    const userName =localStorage.getItem('name')
    const userEmail =localStorage.getItem('email')
    const userId =localStorage.getItem('id')
    const paymentData = {
        amount : Math.round( orderInfo.totalPrice * 100),
        shipping :{
            name: userName,
            address:{
                city: shippingInfo.city,
                postal_code : shippingInfo.postalCode,
                country: shippingInfo.country,
                state: shippingInfo.state,
                line1 : shippingInfo.address
            },
            phone: shippingInfo.phoneNo
        }
    }

    const order = {
        orderItems: cartItems,
        shippingInfo,
        name:userName,
        email:userEmail,
        id:userId
    }
    // console.log(order);
    if(orderInfo) {
        order.itemsPrice = orderInfo.itemsPrice
        order.shippingPrice = orderInfo.shippingPrice
        order.taxPrice = orderInfo.taxPrice
        order.totalPrice = orderInfo.totalPrice
        
    }

    useEffect(() => {
        validateShipping(shippingInfo, navigate)
        if(orderError) {
            toast.error(orderError, {
                onOpen: ()=> { dispatch(clearOrderError()) }
            })
            return
        }

    },[])



    const submitHandler = async (e) => {
        e.preventDefault();
        document.querySelector('#pay_btn').disabled = true;
        try {
            const {data} = await AxiosService.post('api/v1/payment/process',paymentData)
            // const clientSecret = data.client_secret     
            console.log(data);
             
            if(data.success===true){
                toast.success('Payment Success!')
                order.paymentInfo = {
                    id: userId ,
                    status:true
                }    
                dispatch(orderCompleted())
                dispatch(createOrder(order))
                navigate('/order/success')
               
               
            }
            else{
                toast.error('Please Try again!')
            }

            //  const result = await stripe.confirmCardPayment(clientSecret, {
            //     payment_method: {
            //         card: elements.getElement(CardNumberElement),
            //         billing_details: {
            //             name: userName,
            //             email:userEmail
            //         }
            //     }
            // })
        
            // if(result.error){
            //     toast.error(result.error.message)
            //     document.querySelector('#pay_btn').disabled = false;
            // }else{
            //     if((await result).paymentIntent.status === 'succeeded') {
                  
            //     }else{
                   
            //     }
            // }


        } catch (error) {
            
        }
    }


     return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-4">Card Info</h1>
                    <div className="form-group">
                    <label htmlFor="card_num_field">Card Number</label>
                    <CardNumberElement
                        type="text"
                        id="card_num_field"
                        className="form-control"
                       
                    />
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="card_exp_field">Card Expiry</label>
                    <CardExpiryElement
                        type="text"
                        id="card_exp_field"
                        className="form-control"
                       
                    />
                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="card_cvc_field">Card CVC</label>
                    <CardCvcElement
                        type="text"
                        id="card_cvc_field"
                        className="form-control"
                        value=""
                    />
                    </div>
        
                
                    <button
                    id="pay_btn"
                    type="submit"
                    className="btn btn-block py-3"
                    >
                    Pay - { ` $${orderInfo && orderInfo.totalPrice}` }
                    </button>
                  
                </form>
             
        
            </div>
        </div>
    )
}