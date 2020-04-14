import React, { Component } from 'react'

class Footer extends Component{
    render() {
        return(
            <footer className="site-footer bg-dark">
        <div className="container">
          

          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3 className="footer-heading mb-4 text-white">About</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.</p>
              <p><a href="#" className="btn btn-primary text-white px-4">Read More</a></p>
            </div>
            <div className="col-md-5 mb-4 mb-md-0 ml-auto">
              <div className="row mb-4">
                <div className="col-md-6">
                  <h3 className="footer-heading mb-4 text-white">Quick Menu</h3>
                    <ul className="list-unstyled">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contacts</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div className="col-md-6">
                  <h3 className="footer-heading mb-4 text-white">Free Templates</h3>
                    <ul className="list-unstyled">
                      <li><a href="#">HTML5 / CSS3</a></li>
                      <li><a href="#">Clean Design</a></li>
                      <li><a href="#">Responsive</a></li>
                      <li><a href="#">Multi Purpose Template</a></li>
                    </ul>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-12">
                <h3 className="footer-heading mb-4 text-white">Stay up to date</h3>
                <form action="#" className="d-flex footer-subscribe">
                  <input type="text" className="form-control rounded-0" placeholder="Enter your email"/>
                  <input type="submit" className="btn btn-primary rounded-0" value="Subscribe"/>
                </form>
              </div>
              </div>
            </div>

            
            <div className="col-md-2">
              
              <div className="row">
              <div className="col-md-12"><h3 className="footer-heading mb-4 text-white">Social Icons</h3></div>
                <div className="col-md-12">
                  <p>
                    <a href="#" className="pb-2 pr-2 pl-0"><span className="icon-facebook"></span></a>
                    <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="p-2"><span className="icon-instagram"></span></a>
                    <a href="#" className="p-2"><span className="icon-vimeo"></span></a>

                  </p>
                </div>
            </div>
            </div>
          </div>       
        </div>
      </footer>
        )
    }
}

export default Footer