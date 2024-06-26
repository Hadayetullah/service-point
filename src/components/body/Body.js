import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./bodyComponents/Home";
import DetailView from "./bodyComponents/DetailView";
import AboutUs from "./bodyComponents/AboutUs";
import ContactUs from "./bodyComponents/ContactUs";
import TermsOfUse from "./bodyComponents/TermsOfUse";
import Privacy from "./bodyComponents/Privacy";

import SignupVerification from "../auth/SignupVerification";
import ResetForgetPassword from "../auth/ResetForgetPassword";

import Spinner from "../specialComponents/Spinner";
// import ServiceDetails from './bodyComponents/ServiceDetails';

const Body = () => {
  // PROBLEM
  // Without this line DetailView Component does not change dynamically.
  // I don't understand why?
  // useSelector(state => state.serviceDetails.isUpdated);
  // const details = useSelector(state => state.serviceDetails.isUpdated);
  // console.log("Details: ", details);
  return (
    <div>
      <Routes>
        <Route path="/details" element={<DetailView />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/reset-password/*" element={<ResetForgetPassword />} />
        <Route path="/authenticate/*" element={<SignupVerification />} />
        <Route path="/" element={<Home />} />
        <Route path="/spinner" element={<Spinner />} />
      </Routes>
    </div>
  );
};

export default Body;
