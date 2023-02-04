import React from 'react';
import ServiceData from './ServiceData';
import { useLocation } from 'react-router-dom';

const ServiceDetails = () => {
    const location = useLocation();
    console.log(location.state);
    console.log(ServiceData);
    const serviceDetails = ServiceData.filter(data =>
        data.name === location.state.value)[0];
    console.log(serviceDetails);
    return (
        <div>


            <div className="section-title-01 honmob">
                <div className="bg_parallax image_01_parallax"></div>
                <div className="opacy_bg_02">
                    <div className="container">
                        <h1>{serviceDetails.title}</h1>
                        <div className="crumbs">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>/</li>
                                <li>{serviceDetails.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section className="content-central">
                <div className="semiboxshadow text-center">
                    <img src="assets/img/img-theme/shp.png" className="img-responsive" alt="" />
                </div>
                <div className="content_info">
                    <div className="paddings-mini">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 single-blog">
                                    <div className="post-item">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="post-header">
                                                    <div className="post-format-icon post-format-standard"
                                                        style={{ marginTop: "-10px" }}>
                                                        <i className="fa fa-image"></i>
                                                    </div>
                                                    <div className="post-info-wrap">
                                                        <h2 className="post-title"><a href="#" title="Post Format: Standard"
                                                            rel="bookmark">{serviceDetails.title}: AC</a></h2>
                                                        <div className="post-meta" style={{ height: "10px" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div id="single-carousel">
                                                    <div className="img-hover">
                                                        <img src="images/services/service.jpg" alt=""
                                                            className="img-responsive" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="post-content">
                                                    <h3>{serviceDetails.title}</h3>
                                                    <p>It is a long established fact that a reader will be distracted by the
                                                        readable content of a page when looking at its layout. The point of
                                                        using Lorem Ipsum is that it has a more-or-less normal distribution
                                                        of letters, as opposed to using &#039;Content here, content
                                                        here&#039;, making it look like readable English. Many desktop
                                                        publishing packages and web page editors now use Lorem Ipsum as
                                                        their default model text, and a search for &#039;lorem ipsum&#039;
                                                        will uncover many web sites still in their infancy. Various versions
                                                        have evolved over the years, sometimes by accident, sometimes on
                                                        purpose (injected humour and the like).</p>
                                                    <h4>Inclusion</h4>
                                                    <ul className="list-styles">
                                                        <li><i className="fa fa-plus"></i>Etiam pulvinar eros eu felis varius,
                                                            nec eleifend risus faucibus.</li>
                                                        <li><i className="fa fa-plus"></i>Donec gravida sem vel nibh feugiat
                                                            tincidunt.</li>
                                                        <li><i className="fa fa-plus"></i>Ut at dui id turpis gravida ultricies
                                                            id interdum enim.</li>
                                                        <li><i className="fa fa-plus"></i>Donec posuere velit non sem viverra
                                                            rutrum.</li>
                                                        <li><i className="fa fa-plus"></i>In sodales risus ac felis aliquam
                                                            finibus.</li>
                                                        <li><i className="fa fa-plus"></i>Fusce sed lorem non massa tristique
                                                            commodo.</li>
                                                        <li><i className="fa fa-plus"></i>Cras efficitur dolor commodo urna
                                                            pulvinar aliquam.</li>
                                                    </ul>
                                                    <h4>Exclusion</h4>
                                                    <ul className="list-styles">
                                                        <li><i className="fa fa-minus"></i>Suspendisse mattis erat non erat
                                                            blandit luctus id vitae ligula.</li>
                                                        <li><i className="fa fa-minus"></i>Quisque vestibulum arcu non odio
                                                            aliquet, sed laoreet turpis fringilla.</li>
                                                        <li><i className="fa fa-minus"></i>Vestibulum ac velit vel lectus
                                                            blandit pulvinar sed convallis odio.</li>
                                                        <li><i className="fa fa-minus"></i>Aenean non ante feugiat nisi tempus
                                                            facilisis.</li>
                                                        <li><i className="fa fa-minus"></i>Sed ac eros non nulla pharetra
                                                            consequat.</li>
                                                        <li><i className="fa fa-minus"></i>Nulla maximus nibh in facilisis
                                                            placerat.</li>
                                                        <li><i className="fa fa-minus"></i>Morbi id velit id libero blandit
                                                            luctus.</li>
                                                        <li><i className="fa fa-minus"></i>Sed hendrerit ex non lacus ultricies
                                                            porttitor.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <aside className="widget" style={{ marginTop: "18px" }}>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">Booking Details</div>
                                            <div className="panel-body">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ borderTop: "none" }}>Price</td>
                                                            <td style={{ borderTop: "none" }}><span>&#36;</span> 300</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Quntity</td>
                                                            <td>1</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Discount</td>
                                                            <td>0</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total</td>
                                                            <td><span>&#36;</span> 300</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="panel-footer">
                                                <form>
                                                    <input type="submit" className="btn btn-primary" name="submit"
                                                        value=" Book Now" />
                                                </form>
                                            </div>
                                        </div>
                                    </aside>
                                    <aside>
                                        <h3>Related Service</h3>
                                        <div className="col-md-12 col-sm-6 col-xs-12 bg-dark color-white padding-top-mini"
                                            style={{ maxWidth: "360px" }}>
                                            <a href="ac-wet-servicing.html">
                                                <div className="img-hover">
                                                    <img src="images/services/thumbnails/thumbnail.jpg" alt=""
                                                        className="img-responsive" />
                                                </div>
                                                <div className="info-gallery">
                                                    <h3>
                                                        AC Wet Servicing
                                                    </h3>
                                                    <hr className="separator" />
                                                    <p>AC Wet Servicing</p>
                                                    <div className="content-btn"><a href="ac-wet-servicing.html"
                                                        className="btn btn-warning">View Details</a></div>
                                                    <div className="price"><span>&#36;</span><b>From</b>200</div>
                                                </div>
                                            </a>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
}

export default ServiceDetails;