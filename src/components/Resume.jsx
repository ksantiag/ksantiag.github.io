import React from "react";
import image from "../resume_pdf_1.jpg";
import image2 from "../resume_pdf_2.jpg";
import file from "../resume_pdf_20210715-12638-1tzulse.pdf"


export default function Resume() {
  return (
    <main style={{backgroundColor: "white;"}}>
      <form method="get" target="_blank" action={file}>
        <button className="ml-10 mt-10">
          <span className="hover:text-red-600 lg:text-5xl cursive">
            Download Resume
          </span>
        </button>
      </form>

      <img
        src={image}
        alt="resume page 1"
        className="  object-center w-full h-full"
      />
      <hr></hr>
      <img
        src={image2}
        alt="resume page 2"
        className="-mt-18 object-cover w-full h-full"
      />
    </main>
  );
}
