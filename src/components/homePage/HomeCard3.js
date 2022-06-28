import React from 'react'

export default function HomeCard3({ 
    src = "img/what-1.jpg" }) {
  return (
    <div className="relative">
      <img src={src} alt="image homesection3" className="w-96 rounded  z-0" />
      <div className="bg-black w-96 h-60 absolute z-20 top-0 rounded opacity-50 "></div>
    </div>
  );
}
