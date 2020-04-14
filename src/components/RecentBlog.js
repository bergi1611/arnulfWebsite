import React, { Component } from 'react'

class RecentBlog extends Component{
    render() {
        return(
            
            <div className="site-section">
                <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12" data-aos="fade">
                    <h2 className="site-section-heading text-center text-uppercase">Recent Blog Posts</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                    <div className="media-image">
                        <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></a>
                        <div className="media-image-body">
                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                        <p><a href="#">Read More</a></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="media-image">
                        <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid"/></a>
                        <div className="media-image-body">
                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                        <p><a href="#">Read More</a></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="300">
                    <div className="media-image">
                        <a href="single.html"><img src="images/img_3.jpg" alt="Image" className="img-fluid"/></a>
                        <div className="media-image-body">
                        <h2 className="font-secondary text-uppercase"><a href="single.html">Where Do You Learn HTML & CSS in 2019?</a></h2>
                        <span className="d-block mb-3">By James &mdash; Jan. 20, 2019</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                        <p><a href="#">Read More</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default RecentBlog