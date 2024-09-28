import Home from '../components/Home';
import Header from '../components/layouts/Header';
import ProductDetail from '../components/product/productDetails';
import ProductSearch from '../components/product/ProductSearch';
import Cart from '../components/cart/Cart';
import Login from '../components/user/Login';
import Register from '../components/user/Register';
import Profile from "../components/user/Profile"
import UpdateProfile from '../components/user/UpdateProfile'
import UpdatePassword from '../components/user/UpdatePassword';
import ResetPassword from '../components/user/ResetPassword'
import ForgotPassword from '../components/user/ForgotPassword'
import  ProtectedRoute from '../components/route/ProtectedRoute'
import Shipping from '../components/cart/Shipping'
import ConfirmOrder from '../components/cart/ConformOrder';
import OrderSuccess from '../components/cart/OrderSuccess'
import OrderDetails from '../components/order/OrderDetails'
import UserOrder from '../components/order/UserOrder'
import Payment from '../components/cart/Payment'
import Dashboard from '../components/admin/Dashboard'
import ProductList from '../components/admin/ProductList';
import NewProduct from '../components/admin/NewProduct';
import UpdateProduct from '../components/admin/UpdateProduct';
import OrderList from '../components/admin/OrderList';
import UpdateOrder from '../components/admin/UpdateOrder';
import UserList from '../components/admin/UserList';
import UpdateUser from '../components/admin/UpdateUser';
import ReviewList from '../components/admin/ReviewList';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Navigate } from 'react-router-dom';
import Delivery from '../components/delivery/Delivery'
const stripeApiKey ="pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
const AppRoutes = [
    {
        path:'/',
        element : <Home/>
       
    },
    {
        path:'/product/:id',
        element : < ProductDetail/>,
        // exact:true
    },
    {
        path:'/search/:keyword',
        element : < ProductSearch/>,
        exact:true
    },
    {
        path:'/Login',
        element :< Login/>,
        // exact:true
    },
    {
        path:'/register',
        element :< Register/>,
        // exact:true
    },
    {
        path:'/myprofile',
        element :<ProtectedRoute>< Profile/></ProtectedRoute> ,
        // exact:true
    },
    {
        path:'/myprofile/update',
        element :<ProtectedRoute>< UpdateProfile/></ProtectedRoute> ,
        // exact:true
    },
    {
        path:'/password/forgot',
        element :< ForgotPassword/>,
        // exact:true
    },
    {
        path:'password/reset/:token',
        element : < ResetPassword/>,
        // exact:true
    },
    {
        path:'myprofile/update/password',
        element :< UpdatePassword/>,
        // exact:true
    },
    {
        path:'cart',
        element :<Cart/>,
        // exact:true
    },
    {
        path:'shipping',
        element :<ProtectedRoute><Shipping/></ProtectedRoute>,
        // exact:true
    },
    {
        path:'/order/confirm',
        element :<ProtectedRoute><ConfirmOrder/></ProtectedRoute>,
        // exact:true
    },
    {
        path:'/order/success',
        element :<OrderSuccess/>,
        // exact:true
    },
    {
        path:'/orders',
        element :<UserOrder/>,
        // exact:true
    },
    {
        path:'/order/:id',
        element :<OrderDetails/>,
        // exact:true
    },
    {  
        path:'/payment',
        element :<Elements stripe={loadStripe(stripeApiKey)}><Payment/></Elements>,
    },
    {
        path:'/admin/dashboard',
        element :<ProtectedRoute isAdmin={true}><Dashboard/></ProtectedRoute> ,
        // exact:true
    },
    //admin user
    {
        path:'/admin/products',
        element :<ProtectedRoute isAdmin={true}><ProductList/></ProtectedRoute>,
        // exact:true
    },
    {
        path:'/admin/products/create',
        element :<ProtectedRoute isAdmin={true}><NewProduct/></ProtectedRoute>,
        // exact:true
    },
    {
        path:'/admin/product/:id',
        element : <ProtectedRoute isAdmin={true}><UpdateProduct/></ProtectedRoute>, 
        // exact:true
    },
    {
        path:'/admin/orders',
        element : <ProtectedRoute isAdmin={true}><OrderList/></ProtectedRoute>,
    },
    {
        path:'/admin/order/:id',
        element : <ProtectedRoute isAdmin={true}><UpdateOrder/></ProtectedRoute>,
    },
    {
        path:'/admin/users',
        element :<ProtectedRoute isAdmin={true}><UserList/></ProtectedRoute>,
    },
    {
        path:'/admin/user/:id',
        element :<ProtectedRoute isAdmin={true}><UpdateUser/></ProtectedRoute>,
    },
     {
        path:'/admin/reviews',
        element : <ProtectedRoute isAdmin={true}><ReviewList/></ProtectedRoute> ,
    },
    {
        path:'/delivery',
        element : <Delivery/>,
    },
    {
        path:'*',
        element : <Navigate to='/'/>
    }
]
// {/* <Route path='/search/:keyword' element={<ProductSearch/>} /> */}


export {AppRoutes} 