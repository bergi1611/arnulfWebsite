import React, { Component } from 'react'

class Products extends Component{
    render() {
        return(
            
            <div className="site-section ">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <span className="caption d-block mb-2 font-secondary font-weight-bold">Products &amp; Services</span>
                    <h2 className="site-section-heading text-uppercase text-center font-secondary">Share Before You Download</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 block-13 nav-direction-white">
                    <div className="nonloop-block-13 owl-carousel">
                        <div className="media-image">
                        <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">Pixel Perfect</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                        </div>
                        </div>
                        <div className="media-image">
                        <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">Template Under CCA 3.0 Unported</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                        </div>
                        </div>
                        <div className="media-image">
                        <img src="images/img_3.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">Useful Web Templates</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                        </div>
                        </div>
                        <div className="media-image">
                        <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">HTML5 / CSS3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                        </div>
                        </div>
                        <div className="media-image">
                        <img src="images/img_4.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">Bootstrap 4</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                        </div>
                        </div>
                        <div className="media-image">
                        <img src="images/img_5.jpg" alt="Image" className="img-fluid"/>
                        <div className="media-image-body">
                            <h2 className="font-secondary text-uppercase">SCSS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                            <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Products