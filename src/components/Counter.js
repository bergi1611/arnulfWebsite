import React, { Component } from 'react'

class Counter extends Component{
    render() {
        return(
            
            <div className="site-section section-counter">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <p className="mb-5"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></p>
                    </div>
                    <div className="col-lg-5 ml-auto">
                    <h2 className="site-section-heading mb-3 font-secondary text-uppercase">Arnulf Count</h2>
                    <p className="mb-5">Ullam ut modi cum voluptatibus atque nulla quidem maxime enim animi cupiditate, mollitia. </p>

                    <div className="row">
                        <div className="col-lg-6">
                        <div className="counter">
                            <span className="caption">Current Downloads</span>
                            <span className="number" data-number="49020">0</span>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="counter">
                            <span className="caption">Number of Templates</span>
                            <span className="number" data-number="275">0</span>
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

export default Counter