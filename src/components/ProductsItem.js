import React, { Component } from 'react'

class ProductsItem extends Component {
    render() {

        // Foto Übergabe
        const picture = this.props.picture || "/images/img_1.jpg"

        return (

            <div className="media-image">
                <img src={picture} alt="Image" className="img-fluid" />
                <div className="media-image-body">
                    <h2 className="font-secondary text-uppercase"> {this.props.caption || 'caption' } </h2>
                    <p> {this.props.text || 'text = Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, voluptate.'} </p>
                    <p><a href="#" className="btn btn-primary text-white px-4">Learn More</a></p>
                </div>
            </div>
        )
    }
}

export default ProductsItem