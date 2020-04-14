import React, { Component } from 'react'
import ProductsItem from './ProductsItem'

class Products extends Component {
    render() {
        return (

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
                                <ProductsItem />
                                <ProductsItem 
                                picture="/images/basti.jpg"
                                caption="servuus"
                                text="blablablablablabla blabalblabalbabla"
                                />
                                <ProductsItem 
                                picture="/images/img_2.jpg"
                                caption="servuus"
                                />
                                <ProductsItem 
                                picture="/images/img_3.jpg"
                                caption="servuus"
                                />
                                <div className="media-image">
                                    <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-image-body">
                                        <h2 className="font-secondary text-uppercase">HTML5 / CSS3</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.</p>
                                        <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                                    </div>
                                </div>
                                <ProductsItem 
                                picture="/images/img_4.jpg"
                                caption="servuus"
                                />
                                <ProductsItem 
                                picture="/images/img_5.jpg"
                                caption="servuus"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products