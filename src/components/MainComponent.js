import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { authCheck } from "../redux/authActionCreators";

import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";

const MainComponent = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheck());
  }, []);

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default MainComponent;
