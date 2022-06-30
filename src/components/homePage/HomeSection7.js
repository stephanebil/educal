import React from 'react'
import HomeCard7 from './HomeCard7'

export default function 
() {
  return (
    // wrapper home section 7
    <div>
      {/* partie titrre et texte */}
      <div className=" text-center mt-40">
        <h2 className="font-bold text-4xl px-80 "> We Share Our Thoughts On Design</h2>
        <p>You don't have to struggle alone, you've got our assistance help.</p>
      </div>
      {/* partie homeCard7 */}
      <div className=" flex gap-5 justify-center">
        <HomeCard7 />

        <HomeCard7
          title="The Challenge Of global Learning In Public Education"
          nameteacher="Barry Tone"
          srcteacher="img/teacher-2.jpg"
          srcmain="img/blog-2.jpg"
          matiere="Marketing"
          couleurmatiere="text-violethomecard-educal"
          date="July 02, 2022"
        />

        <HomeCard7
          title="New Chicagi school budget relies on state pension"
          nameteacher="Barry Tone"
          srcteacher="img/teacher-3.jpg"
          srcmain="img/blog-3.jpg"
          matiere="UX Design"
          couleurmatiere="text-purplehomecard-educal"
          date="July 02, 2022"
        />
      </div>
    </div>
  );
}
