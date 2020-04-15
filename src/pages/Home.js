import React, { Component } from 'react';
import Footer from '../components/Footer';
import BottomBanner from '../components/BottomBanner';
import RecentBlog from '../components/RecentBlog';
import Testimonials from '../components/Testimonials';
import Counter from '../components/Counter';
import Products from '../components/Products';
import Section from '../components/Section';
import Slant from '../components/Slant';
import FirstSection from '../components/FirstSection';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';



class Home extends Component {
  render() {
    return (
      <div>
        <div id="overlayer"></div>
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="site-wrap">






          <Navbar />


          <Slider />



          <Slant />

          <FirstSection />



          <Section
            picture="/images/basti2.jpg"
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
            picture="/images/person_3.jpg"
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

          <Section
            picture="/images/felix.jpg"
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

export default Home;