import React from "react";

export default function Contact() {
  return (
    <>
      <section className="mx-auto max-w-7xl pt-44 py-4 px-4 sm:px-6 lg:px-8 pb-20 dark:bg-[#191919]"  id="contact">
        <div className="mx-5 xl:mx-24">
          <h1 className="relative text-3xl font-bold lg:text-start text-center dark:text-gray-400">
            Contact
          </h1>
          <h6 className="text-[#F3A3A5] font-medium mt-2 lg:text-start text-center ">
            Get in touch
          </h6>
          <div className="mt-10 flex flex-col-reverse items-center justify-around lg:flex-row lg:space-x-5">
            <div className="contacts lg:pt-0 pt-10">
              <div className="text-center rounded-xl border border-gray-300 transition ease-in-out duration-200 hover:shadow-[rgba(0,0,0,0.1)_0px_4px_12px] py-5 px-10">
                <span className="text-4xl dark:text-white">
                  <i className="bx bx-mail-send"></i>
                </span>
                <h2 className="text-xl font-bold dark:text-gray-400">Email</h2>
                <p className="font-light mb-5 dark:text-gray-500">manojmanu5401@gmail.com</p>
                <div className="flex justify-center items-center space-x-1 dark:text-gray-400">
                  <a href="mailto:manojmanu5401@gmail.com" className="">
                    Write me
                  </a>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
              <div className="text-center rounded-xl border border-gray-300 transition ease-in-out duration-200 hover:shadow-[rgba(0,0,0,0.1)_0px_4px_12px] py-5 px-10 mt-5">
                <span className="text-4xl dark:text-white">
                <i className='bx bxl-instagram'></i>
                </span>
                <h2 className="text-xl font-bold dark:text-gray-400">Instagram</h2>
                <p className="font-light mb-5 dark:text-gray-500">manojmanu5401</p>
                <div className="flex justify-center items-center space-x-1 dark:text-gray-400">
                  <a href="https://www.instagram.com/_manoj_5401/" target="_blank" rel="noreferrer" className="">
                    Ping me
                  </a>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </div>
            <img src="images/contact.png" className="w-96 md:w-[30rem] md:h-80" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
