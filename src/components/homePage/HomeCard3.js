import React from 'react'

export default function HomeCard3({ 
    src = "img/what-1.jpg",
    titlecard3="Mostly Online Learning",
    buttoncard3="Start a class today" }) {
  return (
    <div className="relative">
      <img src={src} alt="image homesection3" className="w-96 rounded  z-0" />
      <div className="bg-black w-96 h-full absolute z-20 top-0 rounded opacity-50 "></div>
      <div className=" absolute z-30 top-0 px-24 pt-12  ">
        <h3 className="text-white font-bold text-2xl mt-2 ">{titlecard3}</h3>
        <button className="text-white border font-medium rounded p-2 mt-4">
          {buttoncard3}
        </button>
      </div>
    </div>
  );
}
