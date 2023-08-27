import React from 'react'

export default function Footer(props) {
  return (
    <>
    <footer className=" text-gray-600 body-font xl:px-0 px-5 dark:bg-[#191919]">
      <div className="w-full max-w-screen-xl px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img src={`/images/${props.theme ? "logo-white.png" : "logo.png"}`} width="200" alt=""/>
        </a>
        <span className="flexflex-wrap space-x-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-[#000] text-2xl" href="https://www.linkedin.com/in/manoj-sai-6582a0205/" target="_blank" rel="noreferrer">
          <i className='bx bxl-linkedin'></i>
          </a>
          <a className="text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-[#000] text-2xl" href="https://www.instagram.com/_manoj_5401/" target="_blank" rel="noreferrer">
          <i className='bx bxl-instagram'></i>
          </a>
          <a className="text-gray-500 dark:text-gray-400 hover:dark:text-white hover:text-[#000] text-2xl" href="https://github.com/manojmanu5401" target="_blank" rel="noreferrer">
          <i className='bx bxl-github'></i>
          </a>
        </span>
      </div>
    </footer>
  </>
  )
}
