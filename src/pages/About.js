import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SliderItem from '../components/SliderItem';
import TopBanner from '../components/TopBanner';
import Slant from '../components/Slant';
import Section from '../components/Section';

class About extends Component {

  render() {
    return (

        <div className="site-wrap">
            <Navbar/>
            <TopBanner
            picture="/images/hero_2.jpg"
            caption="About Us"
            text="gschichten ausm "
            link="paulanergarten"
            />
            <Slant />
            <Section 
            sitehalf="first-section"
            picture="/images/basti2.jpg" 
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
            
        </div>
    )
  }
}

export default About;