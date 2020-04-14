import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (

            <div>

                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                <div className="site-navbar-wrap js-site-navbar bg-white">

                    <div className="container">
                        <div className="site-navbar bg-light">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <h2 className="mb-0 site-logo"><a href="index.html" className="font-weight-bold text-uppercase">ARNULF</a></h2>
                                </div>
                                <div className="col-10">
                                    <nav className="site-navigation text-right" role="navigation">
                                        <div className="container">
                                            <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                                            <ul className="site-menu js-clone-nav d-none d-lg-block">
                                                <li className="active"><a href="index.html">Home</a></li>
                                                <li className="has-children">
                                                    <a href="about.html">About</a>
                                                    <ul className="dropdown arrow-top">
                                                        <li><a href="testimonials.html">Testimonials</a></li>
                                                        <li><a href="gallery.html">Gallery</a></li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                        <li><a href="why-choose-us.html">Why Choose Us</a></li>
                                                        <li className="has-children">
                                                            <a href="#">Sub Menus</a>
                                                            <ul className="dropdown">
                                                                <li><a href="testimonials.html">Testimonials</a></li>
                                                                <li><a href="gallery.html">Gallery</a></li>
                                                                <li><a href="why-choose-us.html">Why Choose Us</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="contact.html"><span className="d-inline-block bg-primary text-white btn btn-primary">Get Started</span></a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar