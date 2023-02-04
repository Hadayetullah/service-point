import React, { Component } from 'react';


class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            password_confirmation: ""
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
                            <h1>Registeration</h1>
                            <div className="crumbs">
                                <ul>
                                    <li><a href="index.php.html">Home</a></li>
                                    <li>/</li>
                                    <li>Registeration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content-central">
                    <div className="semiboxshadow text-center">
                    </div>
                    <div className="content_info">
                        <div className="paddings-mini">
                            <div className="container">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-md-offset-3 profile1" style={{ paddingBottom: "40px" }}>
                                    <div className="thinborder-ontop">
                                        <h3>User Info</h3>
                                        <form id="userregisterationform" onSubmit={(event) => this.handleSubmittedForm(event)}>
                                            <div className="form-group row">
                                                <label for="name" className="col-md-4 col-form-label text-md-right">Name</label>
                                                <div className="col-md-6">
                                                    <input onChange={(e) => this.handleInputChange(e)} id="name" type="text" className="form-control" name="name" value={this.state.name} required="" autoFocus="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                                <div className="col-md-6">
                                                    <input onChange={(e) => this.handleInputChange(e)} id="email" type="email" className="form-control" name="email" value={this.state.email} required="" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label for="phone" className="col-md-4 col-form-label text-md-right">Phone</label>
                                                <div className="col-md-6">
                                                    <input onChange={(e) => this.handleInputChange(e)} id="phone" type="text" className="form-control" name="phone" value={this.state.phone} required="" autoFocus="" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label for="password"
                                                    className="col-md-4 col-form-label text-md-right">Password</label>
                                                <div className="col-md-6">
                                                    <input onChange={(e) => this.handleInputChange(e)} id="password" type="password" className="form-control" name="password" value={this.state.password} required="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="password-confirm"
                                                    className="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                                <div className="col-md-6">
                                                    <input onChange={(e) => this.handleInputChange(e)} id="password-confirm" type="password" className="form-control" name="password_confirmation" value={this.state.password_confirmation} required="" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-0">
                                                <div className="col-md-10">
                                                    <span style={{ fontSize: "14px" }}>If you have already registered <a
                                                        href="login.html" title="Login">click here</a> to login</span>
                                                    <button type="submit" className="btn btn-primary pull-right">Register</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-twitter">
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
                </section>

            </div>
        );
    }
}

export default Register;