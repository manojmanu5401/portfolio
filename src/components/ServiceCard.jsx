import React from 'react'

export default function ServiceCard(props) {
  const service = props.service
  const pWord = service.name.split(' ')[0]
  const sWord = service.name.split(' ')[1]
  return (
    <>
      <div className=" relative shadow-[rgba(0,0,0,0.1)_0px_4px_12px] dark:shadow-[rgba(0,0,0,0.3)_0px_4px_12px] rounded-lg pt-32 px-5 w-[300px] pb-5">
            <div className="">
            <span className="text-4xl dark:text-white"><i className={`bx ${service.icon}`}></i></span>
            <h1 className="text-2xl font-medium mt-3 dark:text-gray-500">{pWord}<br/>{sWord}</h1>
            </div>
      </div>
    </>
  )
}
