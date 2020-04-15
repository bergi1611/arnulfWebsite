import React, { Component } from 'react'
import Slant from './Slant'

class TopBanner extends Component{
    render() {

        // Foto Übergabe
        const picture = this.props.picture
        const bgImage = { backgroundImage: "url(" + picture +")" }

        return(
            
            <div className="site-blocks-cover inner-page overlay" style={bgImage} data-aos="fade" data-stellar-background-ratio="0.5">
              
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-5 text-center" data-aos="fade">
                    <h1 className="text-uppercase"> {this.props.caption || 'Banner' } </h1>
                    <span className="caption d-block text-white">{this.props.text}
                    <a href="#">{this.props.link}</a>
                    </span>
                    
                  </div>
                </div>
              
            </div>
            

        )
    }
}

export default TopBanner