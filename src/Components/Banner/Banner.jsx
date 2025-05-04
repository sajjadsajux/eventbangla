import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="hero h-[70vh] bg-amber-200"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/XrDbZ1Nq/banner.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find Your Next Celebration, Right Here in Bangladesh!</h1>
            <p className="mb-5">Whether it’s a colorful festival, a tech conference, a foodie gathering, or a soulful music night — we bring you the best events happening across Bangladesh. Stay updated, book your spot, and make every weekend count!</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
