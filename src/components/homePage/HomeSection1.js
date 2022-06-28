import React from "react";
import HomeCard from "./HomeCard";
import { FaCheck } from "react-icons/fa";

export default function HomeSection1() {
  return (
    // wrapper-homesection1
    <div className="wrapper-homesection1 container py-20">
      <div className="titre-traitfeutre relative">
        <h2 className="container text-center text-4xl font-bold ">
          Why An Scholercity
          <img className="absolute" src="img/yellow-bg.png" alt="" /> Out <br />
          Of The Ordinary
        </h2>
        <p className="text-center mt-5">
          You don't have a struggle alone, you've got our assistance and help.
        </p>

        <img
          src="img/yellow-bg.png"
          alt="feutre jaune"
          className="absolute left-96 top-10"
        />
      </div>
      {/* homeCards section 1 */}
      <div className="homecards flex justify-center mt-10">
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
      {/* part2 section 1  */}
      <div className="section1part2 flex justify-center mt-40 gap-x-28 items-center">
        <img
          className="w-80 rounded "
          src="img/about.jpg"
          alt="image about type qui pense sur son bureau"
        />
        <div className="w-96">
          <h2 className="container text-4xl font-bold">
            Achieve Your
            <br />
            Goals With Educal
          </h2>
          <p className="mt-5">
            Lost the plot bobby such a fibber bieeding bits and bobs don't get
            shirty with me bugger all mate chinwag pukka william barney, horse
            play buggered.
          </p>
          <ul className="mt-5 font-bold leading-loose ">
            <li className="flex items-center gap-2 ">
              <FaCheck className="text-greenhomecard-educal" /> Upskill your
              organization.
            </li>
            <li className="flex items-center gap-2 ">
              <FaCheck className="text-greenhomecard-educal" />
              Access more then 100K online courses
            </li>
            <li className="flex items-center gap-2 ">
              <FaCheck className="text-greenhomecard-educal" />
              Learn the latest skills
            </li>
          </ul>
          <div className="mt-8 ">
            <button className="border-2 rounded p-2 font-bold ">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
