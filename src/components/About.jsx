import React from "react";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl pt-44 py-4 px-4 sm:px-6 lg:px-8" id="about">
        <div className="mx-5 xl:mx-24">
          <div className="flex flex-col justify-center text-center lg:text-start items-center lg:flex-row lg:space-x-10 h-max space-y-10">
            <img src="images/about.png" alt="" className="w-[20rem] lg:w-[30rem]" />
            <div>
            <h1 className="relative text-4xl lg:text-start font-bold">About me</h1>
            <h6 className="text-[#F3A3A5] font-medium mt-2">My Introduction</h6>
            <p className="mt-6 text-md text-justify">
              Passionate and skilled Web Designer and Developer with a creative
              flair for creating visually stunning and user-friendly websites.
              I'm a skilled front-end and back-end developer who creates
              seamless digital experiences that capture the distinct visions of
              my clients. I am excellent at creating and managing responsive
              websites that provide a pleasant user experience. My specialty is
              developing clean, optimized code using the most up-to-date
              development tools and methodologies, and creating dynamic,
              engaging interfaces Let's collaborate and take your online
              presence to new heights.
            </p>
            </div>            
          </div>
        </div>
      </section>
    </>
  );
}
