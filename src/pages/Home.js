import React from 'react'
import HomeHero from '../components/homePage/HomeHero'
import HomeSection1 from '../components/homePage/HomeSection1'
import HomeSection2 from '../components/homePage/HomeSection2'
import HomeSection3 from '../components/homePage/HomeSection3';
import HomeSection4 from '../components/homePage/HomeSection4';
import HomeSection5 from '../components/homePage/HomeSection5';
import HomeSection6 from '../components/homePage/HomeSection6';

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 /> 
    </div>
  );
}
