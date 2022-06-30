import React from 'react'
import HomeCard5 from './HomeCard5';

export default function HomeSection5() {
  return (
    // wrapper Home section5
    <div className=" mt-40">
      {/* titre et texte */}
      <div className="text-center">
        <h2 className="font-bold text-4xl">We Are proud</h2>
        <p className="mt-5">
          you don't have to struggle alone, you've got our assistance and help.
        </p>
      </div>
      {/* partie HomeCard5 */}
      <div className="mt-20 flex justify-center space-x-40 ">
        <HomeCard5 />
        <HomeCard5
          srchomecard5="img/svgexport-12.png"
          numhomecard5="397"
          exthomecard5="Totales Courses"
        />
        <HomeCard5
          srchomecard5="img/svgexport-13.png"
          numhomecard5="3,853"
          exthomecard5="online Learners"
        />
        <HomeCard5
          srchomecard5="img/svgexport-14.png"
          numhomecard5="32k"
          exthomecard5="Foreign followers"
        />
      </div>
    </div>
  );
}
