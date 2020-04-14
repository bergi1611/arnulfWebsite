import React, { Component } from 'react';
import Footer from './components/Footer';
import BottomBanner from './components/BottomBanner';
import RecentBlog from './components/RecentBlog';
import Testimonials from './components/Testimonials';
import Counter from './components/Counter';
import Products from './components/Products';
import Section from './components/Section';
import Slant from './components/Slant';
import FirstSection from './components/FirstSection';



class App extends Component {
  render(){
  return (
  <div>
      <div id="overlayer"></div>
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>

    <div className="site-wrap">

      

      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div> 
      
      
      <div className="site-navbar-wrap js-site-navbar bg-white">
        
        <div className="container">
          <div className="site-navbar bg-light">
            <div className="row align-items-center">
              <div className="col-2">
                <h2 className="mb-0 site-logo"><a href="index.html" className="font-weight-bold text-uppercase">ARNULF</a></h2>
              </div>
              <div className="col-10">
                <nav className="site-navigation text-right" role="navigation">
                  <div className="container">
                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className="active"><a href="index.html">Home</a></li>
                      <li className="has-children">
                        <a href="about.html">About</a>
                        <ul className="dropdown arrow-top">
                          <li><a href="testimonials.html">Testimonials</a></li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><a href="faq.html">FAQ</a></li>
                          <li><a href="why-choose-us.html">Why Choose Us</a></li>
                          <li className="has-children">
                            <a href="#">Sub Menus</a>
                            <ul className="dropdown">
                              <li><a href="testimonials.html">Testimonials</a></li>
                              <li><a href="gallery.html">Gallery</a></li>
                              <li><a href="why-choose-us.html">Why Choose Us</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><a href="contact.html"><span className="d-inline-block bg-primary text-white btn btn-primary">Get Started</span></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="slide-one-item home-slider owl-carousel">
        
        <div className="site-blocks-cover inner-page overlay" style={{ backgroundImage: "url(" + "/images/nulfe1.jpg" + ")" }} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 text-center" data-aos="fade">
                <h1 className="font-secondary  font-weight-bold text-uppercase">Welcome to Arnulf</h1>
              </div>
            </div>
          </div>
        </div>  

        <div className="site-blocks-cover inner-page overlay" style= {{ backgroundImage: "url("+"/images/nulfe2.jpg"+")" }} data-aos="fade" data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 text-center" data-aos="fade">
                <h1 className="font-secondary font-weight-bold text-uppercase">WG Website</h1>
              </div>
            </div>
          </div>
        </div> 
      </div>

      

      
    <Slant />

    <FirstSection />


    
    <Section 
      picture="/images/basti.jpg" 
      caption="sers"
      header="moinmoin"
    />



    <Section 
      sitehalf="block" 
      imgBg="right" 
      autoLayout="mr" 
      caption="neue Caption"
      header="DAS ist der header"
      p1="hier kommt der text für paragraph p1 hin blablabla. der sollte noch umgeschrieben werden dass man das als blogpost machen kann vielleicht! Außerdem wird das bild kleiner wenn der Paragraph nicht lang genug ist. Cheers!"
      p2="hier kommt der text für paragraph p2 hin. Man könnte das ganze auch fest coden wenn man das nicht als blogpost haben will. Ansonsten same shit"
      picture="/images/nulfe3.jpg"
    />

    <Section
      picture="/images/janina.jpg"
    />

    <Section 
      sitehalf="block" 
      imgBg="right" 
      autoLayout="mr" 
      caption="neue Caption"
      header="DAS ist der header"
      p1="hier kommt der text für paragraph p1 hin blablabla. der sollte noch umgeschrieben werden dass man das als blogpost machen kann vielleicht! Außerdem wird das bild kleiner wenn der Paragraph nicht lang genug ist. Cheers!"
      p2="hier kommt der text für paragraph p2 hin. Man könnte das ganze auch fest coden wenn man das nicht als blogpost haben will. Ansonsten same shit"
      picture="/images/domi.jpg"
    />


      

    

      <Products />
      

      
      <Counter />

      
      <Testimonials />

      <RecentBlog />

      <BottomBanner />


      <Footer />

      
    </div>
  </div>
  );
  }
}

export default App;
