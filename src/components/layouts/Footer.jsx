import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: '#2F4F4F', color:'white'}}>
        <div className='me-lg-5'>
          <span><b>Get connected with us on social networks : </b></span>
        </div>
        <div>
        </div>
      </section>

      <section className="py-3">
        <div className="container" style={{ marginTop: '20px' }}>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#2F4F4F'}}>
                e-commers
              </h6>
              <p>Your online shop for e-commers essentials. Browse through our extensive selection of products including accessories,mobile, and laptop, all from the convenience of online shopping.</p>
            </div>

            <div className="col-md-4 mb-4 text-center">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#2F4F4F' }}>Quick Links</h6>
              <p>
                <a href='https://e-commers-frnd-1.vercel.app/login' className='text-reset' style={{ textDecoration: 'none' }}>Login</a>
              </p>
              <p>
                <a href='https://e-commers-frnd-1.vercel.app/cart' className='text-reset' style={{ textDecoration: 'none' }}>Cart</a>
              </p>
              <p>
                <a href='https://e-commers-frnd-1.vercel.app/order/confirm' className='text-reset' style={{ textDecoration: 'none' }}>Orders</a>
              </p>
              <p>
                <a href='https://e-commers-frnd-1.vercel.app/shipping' className='text-reset' style={{ textDecoration: 'none' }}>Track Your Order</a>
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: '#2F4F4F' }}>Contact</h6>
              <p>
                <SiHomeassistantcommunitystore />&nbsp; 5/87 east street almabadi
              </p>
              <p style={{ whiteSpace: 'nowrap' }}>
                <IoMdMail />&nbsp; vengadesanguna24@gmail.com
              </p>
              <p>
                <FaPhoneVolume />&nbsp; +91 6380929688
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#2F4F4F', color:'white'}}>
        © 2024 Copyright : &nbsp; 
        <a className='text-reset fw-bold' href='http://localhost:3000/' style={{ textDecoration: 'none' }}>
          shoope
        </a>
      </div>
    </MDBFooter>
  );
}