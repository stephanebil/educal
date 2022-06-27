import React from 'react'

export default function HomeCard({
  title1,
  title2,
  description,
  bgColor = "bg-bluehomecard-educal",
    src="img/svgexport-7.png"
}) {
  return (
    <div className=" flex">
      <div
        className={`${bgColor} shadow-2xl shadow-gray-800/50 w-64 text-white p-10 rounded m-5`}
      >
        <img src={src} alt="icone" className="w-11" />
        <p className="mt-5 font-bold text-lg ">{title1}</p>
        <p className="font-bold text-lg">{title2}</p>
        <p className="mt-5 text-sm ">{description}</p>
      </div>
      {/* <div className="bg-purplehomecard-educal shadow-2xl shadow-gray-800/50 w-64 text-white p-10 rounded m-5">
        <img src="img/svgexport-8.png" alt="icone" className="w-11" />
        <p className="mt-5 font-bold text-lg ">Job Placement</p>
        <p className="font-bold text-lg">Support</p>
        <p className="mt-5 text-sm ">
          Arse over tit morish wind up gormless butty.!
        </p>
      </div>
      <div className="bg-violethomecard-educal shadow-2xl shadow-gray-800/50 w-64 text-white p-10 rounded m-5">
        <img src="img/svgexport-9.png" alt="icone" className="w-11" />
        <p className="mt-5 font-bold text-lg ">Lifetime</p>
        <p className="font-bold text-lg">Slack chat support</p>
        <p className="mt-5 text-sm ">
          Arse over tit morish wind up gormless butty.!
        </p>
      </div>
      <div className="bg-greenhomecard-educal shadow-2xl shadow-gray-800/50 w-64 text-white p-10 rounded m-5">
        <img src="img/svgexport-10.png" alt="icone" className="w-11" />
        <p className="mt-5 font-bold text-lg ">4,000</p>
        <p className="font-bold text-lg">Slack chat support</p>
        <p className="mt-5 text-sm ">
          Arse over tit morish wind up gormless butty.!
        </p>
      </div> */}
    </div>
  );
}
