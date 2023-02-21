import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './bodyComponents/Home';
import DetailView from './bodyComponents/DetailView';
import AboutUs from './bodyComponents/AboutUs';
import ContactUs from './bodyComponents/ContactUs';
// import ContactUs from './bodyComponents/ContactUs';
// import FAQ from './bodyComponents/FAQ';
// import TermsOfUse from './bodyComponents/TermsOfUse';
// import Privacy from './bodyComponents/Privacy';
// import Login from './bodyComponents/Login';
// import Register from './bodyComponents/Register';
// import ServiceDetails from './bodyComponents/ServiceDetails';



const Body = () => {

    // PROBLEM
    // Without this line DetailView Component does not change dynamically.
    // I don't understand why?
    useSelector(state => state.serviceDetails);
    // console.log("Details: ", details);
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/details' element={<DetailView />} />
                <Route path='about-us' element={<AboutUs />} />
                <Route path='/contact-us' element={<ContactUs />} />
                {/* <Route path='/faq' element={<FAQ />} />
                <Route path='terms-of-use' element={<TermsOfUse />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/service-details' element={<ServiceDetails />} /> */}
            </Routes>
        </div>
    );
}

export default Body;