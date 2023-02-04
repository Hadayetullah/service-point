import React from "react";
// import CarouselContent from './Carousal/Carousal';
// import Carousel1 from './Carousal/Carousel1';
import sliders from '../../../carousalData/slider.json';
// import NewCarousel from './Carousal/NewCarousel';

const Home = () => {
    // const arr = ["1", "2", "3", "4", "5", "6"];
    // const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div>
            <h2>Home Page</h2>
            {/* <section className="tp-banner-container">
                <div className="tp-banner">
                    <CarouselContent />
                    <ul>
                        <li data-transition="slidevertical" data-slotamount="1" data-masterspeed="1000"
                            data-saveperformance="off" data-title="Slide">
                            <img src="assets/img/slide/1.jpg" alt="fullslide1" data-bgposition="center center"
                                data-kenburns="on" data-duration="6000" data-ease="Linear.easeNone" data-bgfit="130"
                                data-bgfitend="100" data-bgpositionend="right center" />
                        </li>
                        <li data-transition="slidehorizontal" data-slotamount="1" data-masterspeed="1000"
                            data-saveperformance="off" data-title="Slide">
                            <img src="assets/img/slide/2.jpg" alt="fullslide1" data-bgposition="top center"
                                data-kenburns="on" data-duration="6000" data-ease="Linear.easeNone" data-bgfit="130"
                                data-bgfitend="100" data-bgpositionend="right center" />
                        </li>
                    </ul>
                    <div className="tp-bannertimer"></div>
                </div>
                <div className="filter-title">
                    <div className="title-header">
                        <h2 style={{ color: "#fff" }}>BOOK A SERVICE</h2>
                        <p className="lead">Book a service at very affordable price, </p>
                    </div>
                    <div className="filter-header">
                        <form id="sform" action="searchservices" method="post">
                            <input type="text" id="q" name="q" required="required" placeholder="What Services do you want?"
                                className="input-large typeahead" autoComplete="off" />
                            <input type="submit" name="submit" value="Search" />
                        </form>
                    </div>
                </div>
            </section>



            



            <section className="content-central">

                <div className="content_info content_resalt">
                    <div className="container" style={{ marginTop: "40px" }}>
                        <div className="row">
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul id="sponsors" className="tooltip-hover">
                                    <li data-toggle="tooltip" title="" data-original-title="AC"> <a
                                        href="servicesbycategory/1.html"><img src="images/sercat/service-icon.png"
                                            alt="AC" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Beauty"> <a
                                        href="servicesbycategory/2.html"><img src="images/sercat/service-icon.png"
                                            alt="Beauty" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Plumbing"> <a
                                        href="servicesbycategory/3.html"><img src="images/sercat/service-icon.png"
                                            alt="Plumbing" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Electrical"> <a
                                        href="servicesbycategory/4.html"><img src="images/sercat/service-icon.png"
                                            alt="Electrical" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Shower Filter"> <a
                                        href="servicesbycategory/5.html"><img src="images/sercat/service-icon.png"
                                            alt="Shower Filter" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Home Cleaning"> <a
                                        href="servicesbycategory/6.html"><img src="images/sercat/service-icon.png"
                                            alt="Home Cleaning" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Carpentry"> <a
                                        href="servicesbycategory/7.html"><img src="images/sercat/service-icon.png"
                                            alt="Carpentry" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Pest Control"> <a
                                        href="servicesbycategory/8.html"><img src="images/sercat/service-icon.png"
                                            alt="Pest Control" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Chimney Hob"> <a
                                        href="servicesbycategory/9.html"><img src="images/sercat/service-icon.png"
                                            alt="Chimney Hob" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Water Purifier"> <a
                                        href="servicesbycategory/10.html"><img src="images/sercat/service-icon.png"
                                            alt="Water Purifier" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Computer Repair"> <a
                                        href="servicesbycategory/11.html"><img src="images/sercat/service-icon.png"
                                            alt="Computer Repair" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="TV"> <a
                                        href="servicesbycategory/12.html"><img src="images/sercat/service-icon.png"
                                            alt="TV" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Refrigerator"> <a
                                        href="servicesbycategory/13.html"><img src="images/sercat/service-icon.png"
                                            alt="Refrigerator" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Geyser"> <a
                                        href="servicesbycategory/14.html"><img src="images/sercat/service-icon.png"
                                            alt="Geyser" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Car"> <a
                                        href="servicesbycategory/15.html"><img src="images/sercat/service-icon.png"
                                            alt="Car" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Document"> <a
                                        href="servicesbycategory/16.html"><img src="images/sercat/service-icon.png"
                                            alt="Document" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Movers &amp; Packers"> <a
                                        href="servicesbycategory/17.html"><img src="images/sercat/service-icon.png"
                                            alt="Movers &amp; Packers" /></a></li>
                                    <li data-toggle="tooltip" title="" data-original-title="Home Automation"> <a
                                        href="servicesbycategory/18.html"><img src="images/sercat/service-icon.png"
                                            alt="Home Automation" /></a></li>
                                </ul>
                                <Carousel1 />
                            </div>
                        </div>
                    </div>
                </div>




                
                
                <div className="semiboxshadow text-center">
                    <img src="assets/img/img-theme/shp.png" className="img-responsive" alt="" />
                </div>
                <div className="content_info">


                    <section>
                            <div className="container-fluid" style={{ display: "flex", overflowX: "auto" }}>
                                {sliders.map((image, index) => (
                                    <div className="card" style={{width: "20%", margin: "0 2px"}}>
                                        <img
                                            key={index}
                                            src={image.image}
                                            alt={image.title}
                                            style={{
                                                border: "1px solid inherit",
                                                borderRadius: "5px",
                                                height: "200px",
                                                width: "100%",
                                                objectFit: "cover",
                                            }}
                                        />

                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-secondary">Go somewhere</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    </section>



                    <section>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="logo512.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </section>


                    <section style={{margin: "20px"}}>
                        <NewCarousel items={arr} numberOfVisibleItems={3} />
                    </section>
                    


                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="titles">
                                    <h2>ServicePointBD <span>Choice</span> of Services</h2>
                                    <i className="fa fa-plane"></i>
                                    <hr className="tall" />
                                </div>
                            </div>
                            <div className="portfolioContainer" style={{ marginTop: "-50px" }}>
                                <div className="col-xs-6 col-sm-4 col-md-3 hsgrids"
                                    style={{ paddingRight: "5px", paddingLeft: "5px" }}>
                                    <a className="g-list" href="service-details/ac-dry-servicing.html">
                                        <div className="img-hover">
                                            <img src="images/services/thumbnails/thumbnail.jpg" alt="AC Dry Servicing"
                                                className="img-responsive" />
                                        </div>
                                        <div className="info-gallery">
                                            <h3>AC Dry Servicing</h3>
                                            <hr className="separator" />
                                            <p>AC Dry Servicing</p>
                                            <div className="content-btn"><a href="service-details/ac-dry-servicing.html"
                                                className="btn btn-primary">Book Now</a></div>
                                            <div className="price"><span>&#36;</span><b>From</b>300</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-md-3 hsgrids"
                                    style={{ paddingRight: "5px", paddingLeft: "5px" }}>
                                    <a className="g-list" href="service-details/ac-installation.html">
                                        <div className="img-hover">
                                            <img src="images/services/thumbnails/thumbnail.jpg" alt="AC Installation"
                                                className="img-responsive" />
                                        </div>
                                        <div className="info-gallery">
                                            <h3>AC Installation</h3>
                                            <hr className="separator" />
                                            <p>AC Installation</p>
                                            <div className="content-btn"><a href="service-details/ac-installation.html"
                                                className="btn btn-primary">Book Now</a></div>
                                            <div className="price"><span>&#36;</span><b>From</b>320</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-md-3 hsgrids"
                                    style={{ paddingRight: "5px", paddingLeft: "5px" }}>
                                    <a className="g-list" href="service-details/ac-gas-top-up.html">
                                        <div className="img-hover">
                                            <img src="images/services/thumbnails/thumbnail.jpg" alt="AC Gas Top Up"
                                                className="img-responsive" />
                                        </div>
                                        <div className="info-gallery">
                                            <h3>AC Gas Top Up</h3>
                                            <hr className="separator" />
                                            <p>AC Gas Top Up</p>
                                            <div className="content-btn"><a href="service-details/ac-gas-top-up.html"
                                                className="btn btn-primary">Book Now</a></div>
                                            <div className="price"><span>&#36;</span><b>From</b>320</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xs-6 col-sm-4 col-md-3 hsgrids"
                                    style={{ paddingRight: "5px", paddingLeft: "5px" }}>
                                    <a className="g-list" href="service-details/ac-gas-refill.html">
                                        <div className="img-hover">
                                            <img src="images/services/thumbnails/thumbnail.jpg" alt="AC Gas Refill"
                                                className="img-responsive" />
                                        </div>
                                        <div className="info-gallery">
                                            <h3>AC Gas Refill</h3>
                                            <hr className="separator" />
                                            <p>AC Gas Refill</p>
                                            <div className="content-btn"><a href="service-details/ac-gas-refill.html"
                                                className="btn btn-primary">Book Now</a></div>
                                            <div className="price"><span>&#36;</span><b>From</b>510</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content_info">
                    <div className="bg-dark color-white border-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <div className="services-lines-info">
                                        <h2>WELCOME TO DIVERSIFIED</h2>
                                        <p className="lead">
                                            Book best services at one place.
                                            <span className="line"></span>
                                        </p>

                                        <p>Find a wide variety of home services.</p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <ul className="services-lines">
                                        <li>
                                            <a href="servicesbycategory/1.html">
                                                <div className="item-service-line">
                                                    <i className="fa"><img className="icon-img"
                                                        src="images/sercat/service-icon.png" /></i>
                                                    <h5>AC</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="servicesbycategory/3.html">
                                                <div className="item-service-line">
                                                    <i className="fa"><img className="icon-img"
                                                        src="images/sercat/service-icon.png" /></i>
                                                    <h5>Plumbing</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="servicesbycategory/4.html">
                                                <div className="item-service-line">
                                                    <i className="fa"><img className="icon-img"
                                                        src="images/sercat/service-icon.png" /></i>
                                                    <h5>Electrical</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="servicesbycategory/6.html">
                                                <div className="item-service-line">
                                                    <i className="fa"><img className="icon-img"
                                                        src="images/sercat/service-icon.png" /></i>
                                                    <h5>Home Cleaning</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="servicesbycategory/8.html">
                                                <div className="item-service-line">
                                                    <i className="fa"><img className="icon-img"
                                                        src="images/sercat/service-icon.png" /></i>
                                                    <h5>Pest Control</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="servicesbycategory/11.html">
                                                <div className="item-service-line">
                                                    <i className="fa"><img className="icon-img"
                                                        src="images/sercat/service-icon.png" /></i>
                                                    <h5>Computer Repair</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="servicesbycategory/12.html">
                                                <div className="item-service-line">
                                                    <i className="fa"><img className="icon-img"
                                                        src="images/sercat/service-icon.png" /></i>
                                                    <h5>TV</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="servicesbycategory/13.html">
                                                <div className="item-service-line">
                                                    <i className="fa"><img className="icon-img"
                                                        src="images/sercat/service-icon.png" /></i>
                                                    <h5>Refrigerator</h5>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="titles">
                                <h2><span>Appliance</span>Services</h2>
                                <i className="fa fa-plane"></i>
                                <hr className="tall" />
                            </div>
                        </div>
                    </div>
                    <div id="boxes-carousel">
                        <div>
                            <a className="g-list" href="service-details/ac-wet-servicing.html">
                                <div className="img-hover">
                                    <img src="images/services/thumbnails/thumbnail.jpg" alt="" className="img-responsive" />
                                </div>

                                <div className="info-gallery">
                                    <h3>AC Wet Servicing</h3>
                                    <hr className="separator" />
                                    <p>AC Wet Servicing</p>
                                    <div className="content-btn"><a href="service-details/ac-wet-servicing.html"
                                        className="btn btn-primary">Book Now</a></div>
                                    <div className="price"><span>&#36;</span><b>From</b>200</div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="g-list" href="service-details/bedroom-deep-cleaning.html">
                                <div className="img-hover">
                                    <img src="images/services/thumbnails/thumbnail.jpg" alt="" className="img-responsive" />
                                </div>

                                <div className="info-gallery">
                                    <h3>Bedroom Deep Cleaning</h3>
                                    <hr className="separator" />
                                    <p>Bedroom Deep Cleaning</p>
                                    <div className="content-btn"><a href="service-details/bedroom-deep-cleaning.html"
                                        className="btn btn-primary">Book Now</a></div>
                                    <div className="price"><span>&#36;</span><b>From</b>300</div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="g-list" href="service-details/dining-chair-shampooing.html">
                                <div className="img-hover">
                                    <img src="images/services/thumbnails/thumbnail.jpg" alt="" className="img-responsive" />
                                </div>

                                <div className="info-gallery">
                                    <h3>Dining Chair Shampooing</h3>
                                    <hr className="separator" />
                                    <p>Dining Chair Shampooing</p>
                                    <div className="content-btn"><a href="service-details/dining-chair-shampooing.html"
                                        className="btn btn-primary">Book Now</a></div>
                                    <div className="price"><span>&#36;</span><b>From</b>400</div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="g-list" href="service-details/carpet-shampooing.html">
                                <div className="img-hover">
                                    <img src="images/services/thumbnails/thumbnail.jpg" alt="" className="img-responsive" />
                                </div>

                                <div className="info-gallery">
                                    <h3>Carpet Shampooing</h3>
                                    <hr className="separator" />
                                    <p>Carpet Shampooing</p>
                                    <div className="content-btn"><a href="service-details/carpet-shampooing.html"
                                        className="btn btn-primary">Book Now</a></div>
                                    <div className="price"><span>&#36;</span><b>From</b>200</div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="g-list" href="service-details/fabric-sofa-shampooing.html">
                                <div className="img-hover">
                                    <img src="images/services/thumbnails/thumbnail.jpg" alt="" className="img-responsive" />
                                </div>

                                <div className="info-gallery">
                                    <h3>Fabric Sofa Shampooing</h3>
                                    <hr className="separator" />
                                    <p>Fabric Sofa Shampooing</p>
                                    <div className="content-btn"><a href="service-details/fabric-sofa-shampooing.html"
                                        className="btn btn-primary">Book Now</a></div>
                                    <div className="price"><span>&#36;</span><b>From</b>211</div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="g-list" href="service-details/bathroom-deep-cleaning.html">
                                <div className="img-hover">
                                    <img src="images/services/thumbnails/thumbnail.jpg" alt="" className="img-responsive" />
                                </div>

                                <div className="info-gallery">
                                    <h3>Bathroom Deep Cleaning</h3>
                                    <hr className="separator" />
                                    <p>Bathroom Deep Cleaning</p>
                                    <div className="content-btn"><a href="service-details/bathroom-deep-cleaning.html"
                                        className="btn btn-primary">Book Now</a></div>
                                    <div className="price"><span>&#36;</span><b>From</b>233</div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="g-list" href="service-details/floor-scrubbing-polishing.html">
                                <div className="img-hover">
                                    <img src="images/services/thumbnails/thumbnail.jpg" alt="" className="img-responsive" />
                                </div>

                                <div className="info-gallery">
                                    <h3>Floor Scrubbing &amp; Polishing</h3>
                                    <hr className="separator" />
                                    <p>Floor Scrubbing &amp; Polishing</p>
                                    <div className="content-btn"><a href="service-details/floor-scrubbing-polishing.html"
                                        className="btn btn-primary">Book Now</a></div>
                                    <div className="price"><span>&#36;</span><b>From</b>411</div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="g-list" href="service-details/mattress-shampooing.html">
                                <div className="img-hover">
                                    <img src="images/services/thumbnails/thumbnail.jpg" alt="" className="img-responsive" />
                                </div>

                                <div className="info-gallery">
                                    <h3>Mattress Shampooing</h3>
                                    <hr className="separator" />
                                    <p>Mattress Shampooing</p>
                                    <div className="content-btn"><a href="service-details/mattress-shampooing.html"
                                        className="btn btn-primary">Book Now</a></div>
                                    <div className="price"><span>&#36;</span><b>From</b>222</div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a className="g-list" href="service-details/kitchen-deep-cleaning.html">
                                <div className="img-hover">
                                    <img src="images/services/thumbnails/thumbnail.jpg" alt="" className="img-responsive" />
                                </div>

                                <div className="info-gallery">
                                    <h3>Kitchen Deep Cleaning</h3>
                                    <hr className="separator" />
                                    <p>Kitchen Deep Cleaning</p>
                                    <div className="content-btn"><a href="service-details/kitchen-deep-cleaning.html"
                                        className="btn btn-primary">Book Now</a></div>
                                    <div className="price"><span>&#36;</span><b>From</b>111</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </section> */}
        </div>
    );
}

export default Home;