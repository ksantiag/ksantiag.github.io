import React from "react";
import image from "../charleston-pineapple.jpeg";
import tree3 from "../tree3.jpeg";

export default function Home() {
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
    <main >
      <img
        src={image}
        alt="pineapple water fountain"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="mt-36 text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello, I'm Kenny
        </h1>
      </section>
    </main>
  );
}
