import React from 'react'
import HomeHero from '../components/homePage/HomeHero'
import HomeSection1 from '../components/homePage/HomeSection1'
import HomeSection2 from '../components/homePage/HomeSection2'
import HomeSection3 from '../components/homePage/HomeSection3';
export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
    </div>
  );
}
