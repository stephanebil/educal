import React from "react";
import HomeCard from "./HomeCard";

export default function HomeSection1() {
  return (
    <div className="container py-20">
      <div className="titre-traitfeutre relative">
        <h2 className="container text-center text-5xl font-bold ">
          Why An Scholercity<img className="absolute" src="img/yellow-bg.png" alt="" /> Out <br /> Of The Ordinary
        </h2>
        <p className="text-center mt-5">
          You don't have a struggle alone, you've got our assistance and help.
        </p>

        <img
          src="img/yellow-bg.png"
          alt=""
          className="absolute left-96 top-10"
        />
      </div>
      <div className="flex justify-center mt-10">
        <HomeCard
          title1="4,000"
          title2="Online courses"
          description="Arse over tit morish wind up gormless butty.!"
        />
        <HomeCard
          title1="Job Placement"
          title2="Support"
          description="Arse over tit morish wind up gormless butty.!"
          bgColor="bg-purplehomecard-educal"
          src="img/svgexport-8.png"
        />
        <HomeCard
          title1="Lifetime"
          title2="Slack chat support"
          description="Arse over tit morish wind up gormless butty.!"
          bgColor="bg-violethomecard-educal"
          src="img/svgexport-9.png"
        />
        <HomeCard
          title1="Research"
          title2="and innovation"
          description="Arse over tit morish wind up gormless butty.!"
          bgColor="bg-greenhomecard-educal"
          src="img/svgexport-10.png"
        />
      </div>
    </div>
  );
}
