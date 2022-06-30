import React from 'react'
import { FiClock } from "react-icons/fi";

export default function HomeCard7({
  numberlesson = 43,
  title = "The Challenge Of global Learning In Public Education",
  nameteacher = "Jim Séchen",
  srcteacher = "img/teacher-1.jpg",
  srcmain = "img/blog-1.jpg",
  matiere = "Art & Design",
  couleurmatiere = "text-bluehomeletter-educal",
  date = "April 02, 2022",
}) {
  return (
    <div className="max-w-sm min-w-xs drop-shadow-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
      <a href="#">
        <img className="rounded-t-lg" src={srcmain} alt="image homecard2" />
      </a>
      <div className="p-8">
        <div className={`flex items-center gap-2 font-bold ${couleurmatiere}`}>
          <p> {matiere} </p>
        </div>
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3 mt-4">
            <img src={srcteacher} alt="" className="rounded-full" />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nameteacher}
            </p>
          </div>
          <div className=" flex gap-2">
            <FiClock />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
