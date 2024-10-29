import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userOrders as userOrdersAction } from '../../actions/orderActions';

function Delivery() {
  const {userData,setUserData} =useState({})
  const { userOrders = []} = useSelector(state => state.orderState)
  const dispatch = useDispatch();
 useEffect(() => {
        dispatch(userOrdersAction)
    },[])
  return (
    <div className="delivery-page ">
     <h1 className='dell'>Delivery Information</h1> 
     {
     userOrders.map((userOrder,i) => { 
      console.log(userOrder);
      
      return<>
       <div className="order-summary">
        <div className='order-b'>
        <h2 className='c1'>Order Summary</h2>
      <p><strong>Order ID:</strong>{userOrder._id}</p>
      <p><strong>Items:</strong></p>
      <ul>
        <li>
        {userOrder.orderItems.map((item, index) => (
          <li key={index}>{item.name} - {item.quantity}</li>
        ))}
        </li>
      </ul>
      <p><strong>Total Price:</strong> ${userOrder.totalPrice}</p>
   
    <div className="delivery-address">
    <h3>Delivery Address</h3>
    <p>name:{userOrder.name}</p>
    <p>address:{userOrder.shippingInfo.address}</p>
    <p>pincode:{userOrder.shippingInfo.postalCode}</p>
    <p>city:{userOrder.shippingInfo.city},country:{userOrder.shippingInfo.country},phone:{userOrder.shippingInfo.phoneNo}`</p>
  </div>
  <div className="delivery-status">
      <h3>Delivery Status</h3>
      <p>'Out for delivery';</p>
    </div>
    <div className="delivery-eta">
      <h3>Estimated Delivery Time</h3>
      <p>3:30 PM - 4:00 PM</p>
    </div>
        </div>
    </div>
      </>
      
    })     
     }

  </div>
  )
}

export default Delivery