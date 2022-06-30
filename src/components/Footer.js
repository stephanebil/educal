import React from 'react'

export default function Footer() {
  return (
    <div className="mt-20 bg-bluehomelight-educal h-96 ">
      <div className="flex justify-center justify-between container pt-40">
        {/* colonne1 avec logo */}
        <div className="w-60">
          <img src="img/logo.png" alt="" className="" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga
            minus quaerat libero possimus alias magnam porro itaque numquam
            culpa.
          </p>
        </div>

        {/* colonne company */}
        <div className="">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Courses</li>
            <li>Events</li>
            <li>Instructor</li>
            <li>Career</li>
            <li>Become a Teacher</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* colonne Platform */}
        <div className="">
          <h3>Platform</h3>
          <ul>
            <li>Browse Library</li>
            <li>Library</li>
            <li>Partners</li>
            <li>News & Blogs</li>
            <li>FAQs</li>
            <li>Tutorials</li>
          </ul>
        </div>

        {/* colonne Suscribe */}
        <div className="">
          <h3>Subscribe</h3>
          <div className="">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your email address"
            />
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}
