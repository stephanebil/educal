import React from 'react'

export default function HomeCard5({
  srchomecard5 = "img/svgexport-11.png",
  numhomecard5 = "55,267",
  texthomecard5 ="Students Enrolled",
}) {
  return (
    <div >
        <img className="w-10" src={srchomecard5} alt="logo homeCard5" />
        <div className="">
            <p className="font-bold text-2xl">{numhomecard5}</p>
            <p className="text-grayhomeletter-educal">{texthomecard5}</p>
        </div>
    </div>
  );
}
