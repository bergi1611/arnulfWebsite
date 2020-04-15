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

            
        </div>
    )
  }
}

export default About;