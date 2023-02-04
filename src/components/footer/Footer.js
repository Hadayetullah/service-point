// import React, { Component } from 'react';
// import { NavLink, Link } from 'react-router-dom';

// class Footer extends Component {
//     render() {
//         return (
//             <div>

//                 <footer id="footer" className="footer-v1">
//                     <div className="container">
//                         <div className="row visible-md visible-lg">
//                             <div className="col-md-3 col-xs-6 col-sm-6">
//                                 <h3>APPLIANCE SERVICES </h3>
//                                 <ul>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/12.html">TV</a></li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/14.html">Geyser</a></li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/13.html">Refrigerator</a></li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/21.html">Washing Machine</a>
//                                     </li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/22.html">Microwave Oven</a></li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/10.html">Water Purifier</a></li>
//                                 </ul>
//                             </div>
//                             <div className="col-md-3 col-xs-6 col-sm-6">
//                                 <h3>AC SERVICES </h3>
//                                 <ul>
//                                     <li><i className="fa fa-check"></i> <Link to="/service-details" state={{ value: "ac-wet-servicing" }}>Wet Servicing</Link></li>
//                                     <li><i className="fa fa-check"></i> <Link to="/service-details" state={{ value: "ac-dry-servicing" }}>Dry Servicing</Link></li>
//                                     <li><i className="fa fa-check"></i> <Link to="/service-details" state={{ value: "ac-installation" }}>Installation</Link></li>
//                                     <li><i className="fa fa-check"></i> <Link to="/service-details" state={{ value: "ac-uninstallation" }}>Uninstallation</Link></li>
//                                     <li><i className="fa fa-check"></i> <Link to="/service-details" state={{ value: "ac-gas-top-up" }}>Gas Top Up</Link></li>
//                                     <li><i className="fa fa-check"></i> <Link to="/service-details" state={{ value: "ac-gas-refill" }}>Gas Refill</Link></li>
//                                     <li><i className="fa fa-check"></i> <Link to="/service-details" state={{ value: "ac-repair" }}>Repair</Link></li>
//                                 </ul>
//                             </div>
//                             <div className="col-md-3 col-xs-6 col-sm-6">
//                                 <h3>HOME NEEDS </h3>
//                                 <ul>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/19.html">Laundry </a></li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/4.html">Electrical</a></li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/8.html">Pest Control </a></li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/7.html">Carpentry </a></li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/3.html">Plumbing </a></li>
//                                     <li><i className="fa fa-check"></i> <a href="servicesbycategory/20.html">Painting </a></li>
//                                 </ul>
//                             </div>
//                             <div className="col-md-3 col-xs-6 col-sm-6">
//                                 <h3>CONTACT US</h3>
//                                 <ul className="contact_footer">
//                                     <li className="location">
//                                         <i className="fa fa-map-marker"></i> <a href="#"> Faridabad, Haryana, India</a>
//                                     </li>
//                                     <li>
//                                         <i className="fa fa-envelope"></i> <a
//                                             href="mailto:contact@surfsidemedia.in">contact@surfsidemedia.in</a>
//                                     </li>
//                                     <li>
//                                         <i className="fa fa-headphones"></i> <a href="tel:+911234567890">+91-1234567890</a>
//                                     </li>
//                                 </ul>
//                                 <h3 style={{ marginTop: "10px" }}>FOLLOW US</h3>
//                                 <ul className="social">
//                                     <li className="facebook"><span><i className="fa fa-facebook"></i></span><a href="#"></a></li>
//                                     <li className="twitter"><span><i className="fa fa-twitter"></i></span><a href="#"></a></li>
//                                     <li className="github"><span><i className="fa fa-instagram"></i></span><a href="#"></a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="row visible-sm visible-xs">
//                             <div className="col-md-6">
//                                 <h3 className="mlist-h">CONTACT US</h3>
//                                 <ul className="contact_footer mlist">
//                                     <li className="location">
//                                         <i className="fa fa-map-marker"></i> <a href="#"> Faridabad, Haryana, India</a>
//                                     </li>
//                                     <li>
//                                         <i className="fa fa-envelope"></i> <a
//                                             href="mailto:contact@surfsidemedia.in">contact@surfsidemedia.in</a>
//                                     </li>
//                                     <li>
//                                         <i className="fa fa-phone"></i> <a href="tel:+911234567890">+91-1234567890</a>
//                                     </li>
//                                 </ul>
//                                 <ul className="social mlist-h">
//                                     <li className="facebook"><span><i className="fa fa-facebook"></i></span><a href="#"></a></li>
//                                     <li className="twitter"><span><i className="fa fa-twitter"></i></span><a href="#"></a></li>
//                                     <li className="github"><span><i className="fa fa-instagram"></i></span><a href="#"></a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="footer-down">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     {/* Link */}
//                                     <ul className="nav-footer">
//                                         <li><a href="/about-us">About Us</a> </li>
//                                         <li><NavLink to="/contact-us">Contact Us</NavLink></li>
//                                         <li><NavLink to="/faq">FAQ</NavLink></li>
//                                         <li><NavLink to="/terms-of-use">Terms of Use</NavLink></li>
//                                         <li><NavLink to="/privacy">Privacy</NavLink></li>
//                                     </ul>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <p className="text-xs-center crtext">&copy; 2021 SurfsideMedia. All Rights Reserved.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </footer>

//             </div>
//         );
//     }
// }

// export default Footer;