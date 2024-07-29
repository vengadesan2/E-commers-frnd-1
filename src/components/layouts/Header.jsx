
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
import {DropdownButton, Dropdown, Image} from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import { logout } from '../../actions/userActions';


export default function Header () {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }
    const Handlerlogin = () => {
      navigate("/")
    }


    return (
    <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand ">
            {/* <Link to="/"> */}
              {/* <img width="150px" alt='JVLcart Logo' src="/images/logo.png" /> */}
              <h3 className='head1 'onClick={()=>{ 
              Handlerlogin()
              }} >shoope</h3>
            {/* </Link> */}
            </div>
        </div>
  
        <div className="col-12 col-md-6 mt-2 mt-md-0">
           <Search/>
        </div>
  
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          { isAuthenticated ? 
            (
              <Dropdown className='d-inline' >
                  <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                    <figure className='avatar avatar-nav'>
                      <Image width="50px" src={user.avatar??'./images/default_avatar.png'}  />
                    </figure>
                    <span>{user.name}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                      { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                      <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>
                      <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item>
                      <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            )
          
          :
            <Link to="/login"  className="btn" id="login_btn">Login</Link>
          }
          <Link to="/cart"  style={{   "textdecoration":" none"}} ><span id="cart" className="ml-3"> <FaCartShopping style={{ color:'white', fontSize: '24px' }}/></span></Link>
          <span className="ml-1" id="cart_count">{cartItems.length}</span>
        </div>
    </nav>
    )
}
