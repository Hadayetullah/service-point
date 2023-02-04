import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
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
                            <h1>Login</h1>
                            <div className="crumbs">
                                <ul>
                                    <li><a href="index.php.html">Home</a></li>
                                    <li>/</li>
                                    <li>Login</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content-central">
                    <div className="content_info">
                        <div className="paddings-mini">
                            <div className="container">
                                <div className="row portfolioContainer">
                                    <div className="col-xs-12 col-sm-3 col-md-3 profile1">
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 profile1" style={{ minHeight: "300px" }}>
                                        <div className="thinborder-ontop">
                                            <h3>Login Info</h3>
                                            <form id="userloginform" onSubmit={(event) => this.handleSubmittedForm(event)}>
                                                <div className="form-group row">
                                                    <label for="email" className="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
                                                    <div className="col-md-6">
                                                        <input onChange={(e) => this.handleInputChange(e)} id="email" type="email" className="form-control" name="email" value={this.state.email} required="" autofocus="" />
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
                                                    <div className="col-md-6">
                                                        <div className="checkbox">
                                                            <label>
                                                                <input type="checkbox" name="remember" /> Remember Me
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <button type="submit" className="btn btn-primary pull-right">Login</button>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb-0">
                                                    <div className="col-md-10">
                                                        <a className="" href="password/reset.html">Forgot Your Password?</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3 col-md-3 profile1">
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

export default Login;