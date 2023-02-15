import React from "react";
import { useSelector } from "react-redux";
import './Home.css';

import HomeCarousel from "../carousel/HomeCarousel";
import ServiceGalleryList from "./allService/ServiceGalleryList";


import ImageSlider from "./ImageSlider";
import Slide from './Slide';



const Home = () => {

    const services = useSelector(state=> state);
    
    return (
        <div>
             
            <section>
                <div style={{borderTop: "1px solid #CD3932", }}>
                    <HomeCarousel />
                </div>
                {/* <div style={{width:"250px",position:"relative", marginTop:"-32%", marginLeft:"20%"}}>
                    <p>sdosdfa'p;ksafjd'sadffopsfdsfj</p>
                </div> */}
            </section>


            <section>
                {
                    services.map((item, i)=>(
                        <ServiceGalleryList key={i} galleryItem={item} />
                    ))
                }
            </section>


            <section className="workflow">
                <div className="container">
                    <div className="workflow-top">
                        <div className="workflow-header">
                            <h3>Our Workflow</h3>
                        </div>
                        <p>"Enjoy Your Required Service At 3 Steps Ahead"</p>
                    </div>

                    <div className="steps">
                        <div class="card-group">
                            <div class="card step-card">
                                <div class="card-body step-card-body">
                                    <div className="step-top">
                                        <h5 class="card-title">
                                            Step <span class="badge cap">1</span>
                                        </h5>
                                    </div>
                                    <img src="/asset/step/step1.png" alt="Image" />
                                    <h6 class="card-subtitle">Schedule Your Service</h6>
                                    <p class="card-text">Fill Credential, Book Service & Relax</p>
                                </div>
                            </div>
                            <div class="card step-card">
                                <div class="card-body step-card-body">
                                    <div className="step-top">
                                        <h5 class="card-title">
                                            Step <span class="badge cap">2</span>
                                        </h5>
                                    </div>
                                    <img src="/asset/step/step2.png" alt="Image" />
                                    <h6 class="card-subtitle">Service At Your Home</h6>
                                    <p class="card-text">Keep Calm, We Will Serve At Your Door</p>
                                </div>
                            </div>
                            <div class="card step-card">
                                <div class="card-body step-card-body">
                                    <div className="step-top">
                                        <h5 class="card-title">
                                            Step <span class="badge cap">3</span>
                                        </h5>
                                    </div>
                                    <img src="/asset/step/step3.png" alt="Image" />
                                    <h6 class="card-subtitle">Pay After Service</h6>
                                    <p class="card-text">Make Payment After Job Get Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section style={{margin:"50px 0"}}>
                <Slide />
            </section>


            <section style={{margin:"50px 0"}}>
                <ImageSlider />
            </section>


          

        </div>
    );
}

export default Home;