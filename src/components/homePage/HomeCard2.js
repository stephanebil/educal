import React from 'react'
import { FiBook } from "react-icons/fi";

export default function HomeCard2({
  numberlesson = 43,
  title = "Become a product Manager learn the skills & job.",
  nameteacher = "Jim Séchen",
  srcteacher = "img/teacher-1.jpg",
  srcmain = "img/course-1.jpg",
  textcolor = "text-violethomecard-educal",
  price = "Free",
  pricebarre = "",
  spaceprice = "space-x-10",
  bgcolor = "bg-violethomecard-educal",
  subject="Art & Design"
}) {
  return (
    <div className="max-w-xs min-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
      <a href="#">
        <img className="rounded-t-lg" src={srcmain} alt="image homecard2" />
        <p
          className={`${bgcolor} px-3 w-30 mx-8 absolute top-6 text-white rounded font-medium`}
        >
          {subject}
        </p>
      </a>
      <div className="p-8">
        <div className="flex items-center gap-2">
          <FiBook />
          <p> {numberlesson} lesson </p>
        </div>
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex items-center gap-5 mt-4">
          <img src={srcteacher} alt="" className="rounded-full" />
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {nameteacher}
          </p>
        </div>
      </div>
      <div className={`flex border-t-2 ${spaceprice} space-x-20 items-center`}>
        <div className="flex px-8 py-4 ">
          <div className="flex items-center gap-2">
            <p className={`${textcolor} text-xl font-bold`}>{price}</p>
            <p className="line-through font-medium text-grayhomeletter-educal">
              {pricebarre}
            </p>
          </div>
        </div>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium   focus:ring-4 focus:outline-none  "
          >
            Know Details
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
