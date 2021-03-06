import React, { Component } from 'react'
import Slant from './Slant'

class SliderItem extends Component{
    render() {

        // Foto Übergabe
        const picture = this.props.picture
        const bgImage = { backgroundImage: "url(" + picture +")" }

        return(
            
            <div className="site-blocks-cover inner-page overlay" style={bgImage} data-aos="fade" data-stellar-background-ratio="0.5">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6 text-center" data-aos="fade">
                    <h1 className="font-secondary  font-weight-bold text-uppercase"> {this.props.caption || 'Wlecome to Arnulf' } </h1>
                    <span className="caption d-block text-white">{this.props.text}
                    <a href="#">{this.props.link}</a>
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>

        )
    }
}

export default SliderItem