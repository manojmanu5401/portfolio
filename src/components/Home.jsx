import React from 'react'

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl pt-10 lg:pt-32 py-4 px-4 sm:px-6 lg:px-8" id="home">
        <div className="flex justify-between items-center xl:mx-24 flex-col-reverse lg:flex-row">
            <div className="space-y-3 text-center lg:text-start mt-16 lg:mt-6">
                <h1 className="text-7xl font-bold">Hi, I'am Manoj</h1>
                <h2 className='relative text-3xl lg:pl-20 font-medium before:lg:content-[" "] before:lg:absolute before:lg:w-[70px] before:lg:h-[2px] before:lg:bg-black before:lg:left-0 before:lg:top-5'>Web Developer</h2>
                <p className='text-lg max-w-lg'>A passionate Web Designer and Developer based in Vizag, producing quality work.</p>
                <div className='space-x-2'>
                <a href="https://www.linkedin.com/in/manoj-sai-6582a0205/" target="_blank" rel="noreferrer" className='text-[#D3D3D3] text-4xl hover:text-black transition ease-in delay-10'><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/manojmanu5401" target="_blank" rel="noreferrer" className='text-[#D3D3D3] text-4xl hover:text-black transition ease-in delay-10'><i className='bx bxl-github' ></i></a>
                </div>
            </div>
            <div className="animate-circleAnimation shadow-innerShadow bg-profile bg-no-repeat bg-center bg-cover w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] justify-self-center">
            </div>
        </div>
        <div className="techStack mx-24 flex flex-col space-y-4 lg:flex-row items-center mt-10 lg:space-x-6">
            <h1 className="text-xl font-bold">Tech Stack</h1>
            <div className="w-20 lg:w-0 lg:h-12 border-[1px] border-gray-300"></div>
            <div className="logos">
              <ul className="flex flex-wrap gap-6">
                <li>
                <img className="h-12 cursor-pointer" src='images/node.png' alt="" title="NodeJs"/>
                </li>
                <li>
                <img className="h-12 cursor-pointer" src='images/mongo.png' alt="" title="MongoDb"/>
                </li>
                <li>
                <img className="h-12 cursor-pointer" src='images/html.png' alt="" title="HTML5"/>
                </li>
                <li>
                <img className="h-12 cursor-pointer" src='images/css.png' alt="" title="CSS3"/>
                </li>
                <li>
                <img className="h-12 cursor-pointer" src='images/js.webp' alt="" title="JavaScript"/>
                </li>
                <li>
                <img className="h-12 cursor-pointer" src='images/react.png' alt="" title="ReactJs"/>
                </li>
                <li>
                <img className="h-10 cursor-pointer" src='images/tailwindCss.jpg' alt="" title="Tailwind Css"/>
                </li>
              </ul>
            
            
            
            
            
            
            
            </div>
        </div>
      </section>
    </>
  )
}

