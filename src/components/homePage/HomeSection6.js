import React from 'react'

export default function HomeSection6() {
  return (
    // Wrapper HomeSection6
    <div class=" mt-40 relative ">
      {/* partie bground image et couleur bleue */}
      <div className=" bg-bluehomecard-educal2 relative z-10 h-full">
        <img
          src="img/course-6.jpg"
          alt="image de homesection6 "
          className="relative z-20 opacity-25 h-full w-full  "/>
        {/* partie photo portrait et texte */}
        <div className="absolute z-30 top-52 text-white text-center w-full">
          <div className="grid justify-items-center">
            <img
              src="img/testi-1.jpg"
              alt=" photo de Testi"
              className="rounded-full "
            />
          </div>
          <div className="mt-10 px-60">
            <p className=" font-bold text-2xl">
              "Barmy loo sloshed porkiesdo with me down the pub say bubble and
              squeak."
            </p>
            <p className="font-bold text-xl mt-4 ">Jason response</p>
            <p>UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
