// import React from "react";
// import AppRoutes from "../utils/AppRoutes";
// export const UserContext = React.createContext();
// import axios from 'axios';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { useEffect, useState } from 'react';
// import { loadUser } from '../actions/userActions';
// import payment from '../components/cart/Payment'

// function useContect() {
//     const [stripeApiKey, setStripeApiKey] = useState("")
//     useEffect(() => {
//       async function getStripeApiKeys(){
//         const {data} = await axios.get('https://e-commers-back.onrender.com/api/v1/stripeapi')
        
//         setStripeApiKey(data.stripeApiKey)
//       }
//       getStripeApiKeys()
//     },[])

//   return (
//     <>
//       <UserContext.Provider value={{ stripeApiKey, setStripeApiKey}}>
//          <AppRoutes/>
//       </UserContext.Provider>
//     </>
//   );
// }

// export default useContect;