import React, { Component } from 'react'

class Testimonials extends Component{
    render() {
        return(
            
            <div className="site-section block-14 nav-direction-white">

                <div className="container">
                
                <div className="row mb-5">
                    <div className="col-md-12">
                    <h2 className="site-section-heading text-center text-uppercase">Testimonials</h2>
                    </div>
                </div>

                <div className="nonloop-block-14 owl-carousel">
                    

                    <div className="d-block block-testimony mx-auto text-center">
                        <div className="person w-25 mx-auto mb-4">
                        <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                        </div>
                        <div>
                        <h2 className="h5 mb-4">Sebastian Berghofer</h2>
                        <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                        </div>
                    </div>

                    <div className="d-block block-testimony mx-auto text-center">
                        <div className="person w-25 mx-auto mb-4">
                        <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                        </div>
                        <div>
                        <h2 className="h5 mb-4">Janina Gordon</h2>
                        <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                        </div>
                    </div>

                    <div className="d-block block-testimony mx-auto text-center">
                        <div className="person w-25 mx-auto mb-4">
                        <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                        </div>
                        <div>
                        <h2 className="h5 mb-4">Vincent Wollinger</h2>
                        <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                        </div>
                    </div>

                    <div className="d-block block-testimony mx-auto text-center">
                        <div className="person w-25 mx-auto mb-4">
                        <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle w-25 mx-auto"/>
                        </div>
                        <div>
                        <h2 className="h5 mb-4">Dominik Hartogs</h2>
                        <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
                        </div>
                    </div>

                </div>

                </div>
                
            </div>
        )
    }
}

export default Testimonials