import React from 'react'
import { FiArrowRight } from "react-icons/fi";

export default function 
() {
  return (
    // wrapper Homesection 4
    <div className="justify-center items-center mt-40 flex space-x-20">
      {/* partie gauche texte et titre */}
      <div className="w-1/3">
        <p className="font-bold text-bluehomecard-educal">Why Choses Me</p>
        <h2 className="font-bold text-4xl mt-3">
          Tools For Teachers And Leaners
        </h2>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad
          dolor tempore! Quibusdam quasi perspiciatis omnis id accusamus nisi.
          Odit, consequuntur.
        </p>
        <div className="flex space-x-10 mt-10">
          <button className="bg-bluehomecard-educal text-white py-3 px-5 rounded font-semibold">
            Join for free
          </button>
          <button className="flex items-center font-semibold">
            Learn More <FiArrowRight />
          </button>
        </div>
      </div>
      {/* partie de droite photo de deux jeunes diplômés */}
      <div className="">
        <img src="img/why.png" alt="image de deux jeunes diplômés" />
      </div>
    </div>
  );
}
