import React from 'react'

export default function HomeHero() {
  return (
    <div className="bg-bluenav1-educal ">
      <div className="hero-text-all-img container mx-auto flex pt-4">
        <div className="hero-text py-20 mb-96 ">
          <p className="text-6xl font-bold">
            Launch your <br />
            Own <span className="relative z-20">online</span> learning <br />
            Platform
          </p>
          <p className="text-3xl pt-8 font-bold">
            Unlimited access to all 60+ instructors.
          </p>
          <p className="pt-3 text-graynav1-educal">
            2 passes (with access to all classes) for $240
          </p>
          <img
            className="pr-2 relative z-10 -top-44 left-32 "
            src="img/yellow-bg.png"
            alt="trait de feutre jaune"
          />
        </div>
        <div className="hero-all-img">
          <img
            className="z-40 relative"
            src="img/hero.png"
            alt="image de la fille qui souffle"
          />
          <img
            className="z-30 absolute top-60"
            src="img/hero-shape-purple.png"
            alt="tache violette"
          />
        </div>
      </div>
    </div>
  );
}
