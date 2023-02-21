import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer-left'>
                <p>Powered by <span style={{color:"#fff"}}>Service Point Bangladesh</span></p>
            </div>
            <div className='footer-right'>
                <p>All Rights Reserved  &#126;  &#169; <span style={{color:"#fff"}}>2023 servicepointbd.com</span></p>
            </div>
        </div>
    </div>
  )
}


export default Footer;
