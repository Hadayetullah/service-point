import React, { Component } from 'react';

class ContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            location: "",
            message: ""
        }
    }

    handleSubmittedForm = event => {
        console.log(this.state);
        event.preventDefault();
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div>

                <div className="section-title-01 honmob">
                    <div className="bg_parallax image_02_parallax"></div>
                    <div className="opacy_bg_02">
                        <div className="container">
                            <h1>Contact Us</h1>
                            <div className="crumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>/</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-central">
                    <div className="semiboxshadow text-center">
                        <img src="assets/img/img-theme/shp.png" className="img-responsive" alt="" />
                    </div>
                    <div id="map" className="honmob"> </div>
                    <div className="content_info">
                        <div className="paddings-mini">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <aside>
                                            <h4>The Office</h4>
                                            <address>
                                                <strong>SurfsideMedia Home Services.</strong><br />
                                                <i className="fa fa-map-marker"></i><strong>Address: </strong>Faridabad, Haryana,
                                                India<br />
                                                <i className="fa fa-phone"></i><strong>Phone: </strong> +91-1234567890
                                            </address>
                                            <address>
                                                <strong>SurfsideMedia Emails</strong><br />
                                                <i className="fa fa-envelope"></i><strong>Email:</strong><a
                                                    href="mailto:contact@surfsidemedia.in"> contact@surfsidemedia.in</a><br />
                                                <i className="fa fa-envelope"></i><strong>Email:</strong><a
                                                    href="mailto:support@surfsidemedia.in"> support@surfsidemedia.in</a>
                                            </address>
                                        </aside>
                                        <hr className="tall" />
                                    </div>
                                    <div className="col-md-8">
                                        <h3>Contact Form</h3>
                                        <p className="lead">
                                        </p>
                                        <form id="contactform" className="form-theme" onSubmit={(event) => this.handleSubmittedForm(event)}>
                                            {/* <input type="hidden" name="_token" value="2NHPrBqKScv73zvhqc7UbyDOvtsWZNm2dbOyAkqx" /> */}
                                            <input onChange={(e) => this.handleInputChange(e)} type="text" placeholder="Name" name="name" value={this.state.name} id="name" required="" />
                                            <input onChange={(e) => this.handleInputChange(e)} type="email" placeholder="Email" name="email" value={this.state.email} id="email" required="" />
                                            <input onChange={(e) => this.handleInputChange(e)} type="text" placeholder="Phone" name="phone" value={this.state.phone} id="phone" required="" />
                                            <input onChange={(e) => this.handleInputChange(e)} type="text" placeholder="Location" name="location" value={this.state.location} id="autocomplete"
                                                required="" />
                                            <textarea onChange={(e) => this.handleInputChange(e)} placeholder="Your Message" name="message" value={this.state.message} id="message"
                                                required="" />
                                            <input type="submit" name="Submit" value="Send Message" className="btn btn-primary" />
                                        </form>
                                        {/* <div id="result"></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-twitter content_resalt border-top">
                        <i className="fa fa-twitter icon-big"></i>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ContactUs;