import React from 'react';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

const MainComponent = (props) => {
    // console.log("MainComponent: ", props);
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default MainComponent;