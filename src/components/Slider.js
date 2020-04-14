import React, { Component } from 'react'
import SliderItem from './SliderItem'

class Slider extends Component{
    render() {
        return(
            
            <div className="slide-one-item home-slider owl-carousel">

            <SliderItem picture="/images/nulfe1.jpg" caption="Seers" />

            <SliderItem picture="/images/nulfe3.jpg" />

            <div className="site-blocks-cover inner-page overlay" style={{ backgroundImage: "url(" + "/images/nulfe2.jpg" + ")" }} data-aos="fade" data-stellar-background-ratio="0.5">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 text-center" data-aos="fade">
                    <h1 className="font-secondary font-weight-bold text-uppercase">WG Website</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )
    }
}

export default Slider