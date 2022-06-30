import React from 'react'
import HomeCard2 from './HomeCard2';

export default function HomeSection2() {
  return (
    // wrapper Homesection2
    <div className="wrapper-homesection2 mb-40 bg-bluehomelight-educal p-28 mt-20 ">
      <div className="homesection2-part1 container ">
        <h2 className="font-bold text-4xl text-left">
          Find The Right <br />
          Online Course for You
        </h2>
        <div className=" mt-6 flex space-x-24 text-center">
          <p>
            You don't have to struggle alone, you've got our assistance and
            help.
          </p>
          <ul className="flex space-x-5 font-bold">
            <li className="text-bluehomecard-educal">
              <a href="#">See All</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Popularity</a>
            </li>
            <li>
              <a href="#">featured</a>
            </li>
            <li>
              <a href="#">Art & Design</a>
            </li>
          </ul>
        </div>
      </div>

      {/* section cards HomeCard2 */}
      <div className="homesection2-part2 mt-8 justify-center">
        <div className="container lg:flex space-x-5 justify-center">
          <HomeCard2 />
          <HomeCard2
            numberlesson="72"
            title="Fundamentals of music theory Learn new"
            nameteacher=" Barry Tone"
            srcteacher="img/teacher-2.jpg"
            srcmain="img/course-2.jpg"
            textcolor="text-bluehomeletter-educal"
            price="$32.00"
            pricebarre="$68.00"
            spaceprice="space-x-2"
            bgcolor="bg-bluehomeletter-educal"
            subject="Mechanical"
          />
          <HomeCard2
            numberlesson="14"
            title="Strategy law and organization Foundation"
            nameteacher="Elon Gated"
            srcteacher="img/teacher-3.jpg"
            srcmain="img/course-3.jpg"
            textcolor="text-greenhomecard-educal"
            price="$46.00"
            pricebarre="$68.00"
            spaceprice="space-x-2"
            bgcolor="bg-greenhomecard-educal"
            subject="Development"
          />
        </div>

        <div className="mt-14 container lg:flex space-x-5 justify-center">
          <HomeCard2
            numberlesson="13"
            title="Creative writing through Storytelling"
            nameteacher="Shahnewaz Sakil"
            srcteacher="img/teacher-6.jpg"
            srcmain="img/course-6.jpg"
            textcolor="text-purplehomecard-educal"
            price="$46.00"
            pricebarre="$72.00"
            spaceprice="space-x-2"
            bgcolor="bg-purplehomecard-educal"
            subject="UX Designer"
          />
          <HomeCard2
            numberlesson="22"
            title="The business Intelligence analyst Course 2022"
            nameteacher="Eleanor Fant"
            srcteacher="img/teacher-4.jpg"
            srcmain="img/course-4.jpg"
            textcolor="text-bluehomecard-educal"
            price="$62.00"
            pricebarre="$97.00"
            spaceprice="space-x-2"
            bgcolor="bg-bluehomecard-educal"
            subject="Marketing"
          />
          <HomeCard2
            numberlesson="18"
            title="Build your media and Public Presence"
            nameteacher="Pelican Steve"
            srcteacher="img/teacher-5.jpg"
            srcmain="img/course-5.jpg"
            textcolor="text-orangehomeletter-educal"
            price="$62.00"
            pricebarre="$97.00"
            spaceprice="space-x-2"
            bgcolor="bg-orangehomeletter-educal"
            subject="Audio & Music"
          />
        </div>
      </div>
    </div>
  );
}
