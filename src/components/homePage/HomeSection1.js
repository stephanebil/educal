import React from "react";
import HomeCard from "./HomeCard";

export default function HomeSection1() {
  return (
    <div className="container py-20">
      <div className="titre-traitfeutre relative">
        <h2 className="container text-center text-5xl font-bold ">
          Why An Scholercity Out <br /> Of The Ordinary
        </h2>
        <img src="img/yellow-bg.png" alt="" className="absolute left-96 top-10" />
      </div>
      <HomeCard />
    </div>
  );
}
