import React from 'react'
import HomeCard3 from './HomeCard3';

export default function HomeSection3() {
  return (
    <div className="wrapper-homesection3 text-center container">
      <div className="">
        <h2 className="font-bold text-4xl ">What Is Skilline?</h2>
        <p className="mt-6 px-80">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam amet
          eveniet modi nihil neque dolor, ad aut beatae, molestiae illo deleniti
          velit. Numquam iure temporibus, dolorum officiis suscipit cupiditate ?
        </p>
      </div>

      <div className="flex justify-center gap-10 m-20">
        <HomeCard3 />
        <HomeCard3 
        src="img/what-2.jpg" 
        titlecard3 ="Become an Instructor"
        buttoncard3 ="Start teaching"/>
      </div>
    </div>
  );
}
