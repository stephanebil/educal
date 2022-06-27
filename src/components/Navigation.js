import React from 'react';

export default function Navigation() {
  return (
    <header className="bg-bluenav1-educal p-8 ">
      {/* navigateur logo menu et bouton */}
      <section className="navigateur-logo-menu-bouton container mx-auto flex justify-between ">
        <div className="logo">
          <a href="./pages/">
            <img src="img/logo.png" alt="logo de Educal" />
          </a>
        </div>

        <div className="navigateur-menu-bouton flex space-x-10 items-center">
          {/* menu du navigateur */}
          <div className="navigateur-menu">
            <ul className="flex space-x-10">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="Courses">Courses</a>
              </li>
              <li>
                <a href="Blog">Blog</a>
              </li>
              <li>
                <a href="Instructor">Instructor</a>
              </li>
              <li>
                <a href="Contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* le bouton du navigateur */}
          <div className="navigateur-bouton bg-blue-700 text-white px-8 py-2 rounded">
            <button>Sign up</button>
          </div>
        </div>
      </section>

      {/* hero titre et photo */}
      <hero className="hero-text-all-img bg-bluenav1-educal container mx-auto flex pt-4">
        <div className="hero-text py-20 mb-96">
          <p className="text-6xl font-bold">
            Launch your <br />
            Own online learning <br />
            Platform
          </p>
          <p className="text-3xl pt-8 font-bold">
            Unlimited access to all 60+ instructors.
          </p>
          <p className="pt-3 text-graynav1-educal">
            2 passes (with access to all classes) for $240
          </p>
          <img
            className="pr-96 mb-96"
            src="img/yellow-bg.png"
            alt="trait de feutre jaune"
          />
        </div>
        <div className="hero-all-img">
          <img
            className="z-40 absolute"
            src="img/hero.png"
            alt="image de la fille qui souffle"
          />
          <img
            className="z-30 relative top-72 "
            src="img/hero-shape-purple.png"
            alt="tache violette"
          />
        </div>
      </hero>
    </header>
  );
}
