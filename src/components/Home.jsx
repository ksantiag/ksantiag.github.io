import React, { useState, useEffect } from "react";
import image from "../charleston-pineapple.jpeg";
import tree3 from "../tree3.jpeg"

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div className="parallax-content-heading">
        <h1 className="parallax-content-heading-text"></h1>
        <h2 className="parallax-content-heading-caption">
          This is some random text
        </h2>
      </div>
      <div className="parallax-content-cta">
        <p>
          <b>1. like me</b> because I say so
        </p>
        <p>
          <b>1. like me</b> because I say so
        </p>
        <p>
          <b></b>
        </p>
      </div>
    </>
  );
  return (
    <main className="mt-36">
      <img
        src={image}
        alt="pineapple water fountain"
        className="absolute object-cover w-full h-full"
        style={{ transform: `translateY(${offsetY * 0.9}px)` }}
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1
          className="mt-36 text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        >
          Hello, I'm Kenny
        </h1>
      </section>
      <section className="relative flex justify-center min-h-screen px-8">
        <img
          src={tree3}
          alt="pineapple water fountain"
          className="absolute object-cover w-full h-full"
          style={{ transform: `translateY(${offsetY * 0.9}px)` }}
        />
        <div className="mt-96">
        <h1
          className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"
          style={{ transform: `translateY(${offsetY * 0.85}px)` }}
        >
          And I like trees
        </h1>
        </div>
      </section>
    </main>
  );
}
