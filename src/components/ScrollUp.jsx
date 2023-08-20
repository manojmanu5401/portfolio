import React from 'react'

export default function ScrollUp() {
    window.addEventListener("scroll", function() {
        const scroll =this.document.querySelector(".scrollUp")
        if(this.scrollY >= 560) {
            scroll.classList.remove("bottom-[-20%]")
            scroll.classList.add("bottom-20")
        }
        else{
            scroll.classList.add("bottom-[-20%]")
            scroll.classList.remove("bottom-20")
        }
    
    })
  return (
    <>
      <a href="/#" className="scrollUp fixed text-2xl text-white hover:bg-[#E5383B] transition-all ease-in-out duration-500 right-8 bottom-[-20%] opacity-80  z-50 px-3 py-2 rounded-lg bg-[#F3A3A5]">
      <i className='bx bx-up-arrow-alt'></i>
      </a>
    </>
  )
}
