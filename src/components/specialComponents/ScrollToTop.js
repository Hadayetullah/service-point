import React, {useEffect, useState} from 'react';

import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState("hidden");

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);


    const handleScroll = () =>{
        if(window.pageYOffset > 300){
            setIsVisible("visible");
        } else {
            setIsVisible("hidden");
        }
    };

    const handleScrollClick = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  return (
    <div 
        onClick={handleScrollClick}
        style={{
            visibility:`${isVisible}`,
            cursor:"pointer",
            width:"40px",
            height:"40px",
            right:"1%",
            bottom:"85px",
            position:"fixed",
            borderRadius:"50px",
            boxShadow:"-2px 2px 3px 1px #333"
        }}
    >
        <div 
            style={{
                fontSize:"40px",
                color:"red"
            }}
        >
            <FontAwesomeIcon style={{margin:"-1px 0px 13px -1px"}} icon={faCircleUp} />
        </div>
    </div>
  )
}

export default ScrollToTop;
