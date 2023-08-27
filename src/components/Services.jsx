import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
  {
    id:"1",
    name:  "Web Designing",
    icon: "bx-code-block"
  },
  {
    id:"2",
    name:  "Web Development",
    icon: "bx-code"
  },
  {
    id:"3",
    name:  "UI/UX Designing",
    icon: "bxs-layout"
  }

]

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-7xl pt-44 py-4 px-4 sm:px-6 lg:px-8 dark:bg-[#191919]" id="services">
      <div className="mx-5 xl:mx-24">
      <h1 className="relative text-3xl font-bold lg:text-start text-center dark:text-gray-400">
            Services
          </h1>
          <h6 className="text-[#F3A3A5] font-medium mt-2 lg:text-start text-center ">
            What I offer
          </h6>
          <div className="serviceCards flex flex-col items-center space-y-5 lg:flex-row lg:space-y-0 justify-between mt-10 lg:space-x-2">
            {
              services.map(service=>{
                return <ServiceCard service={service} key={service.id}/>
              })
            }
          </div>
      </div>
      </section>
    </>
  )
}
