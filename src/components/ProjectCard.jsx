import React from "react";

export default function ProjectCard(props) {
  var project = props.data;
  return (
    <>
      <div
        className={`flex h-[45rem] mb-10 lg:h-96 items-center lg:items-stretch flex-col space-y-10 lg:space-y-0 ${
          project.reverse
            ? "lg:flex-row-reverse lg:space-x-0"
            : "lg:flex-row lg:space-x-4"
        } rounded-2xl p-6 shadow-[rgba(0,0,0,0.1)_0px_4px_12px] dark:shadow-[rgba(0,0,0,0.5)_0px_4px_12px]`}
      >
        <div
          className={`rounded-2xl border-2 border-[#eee] h-auto w-full lg:max-w-[33rem] overflow-hidden ${
            project.reverse ? "ml-5" : "ml-0"
          }`}
        >
          <a href={`${project.demo}`} target="_blank" rel="noreferrer">
            <img
              src={`images/${project.image}`}
              alt=""
              className="h-full w-full object-cover object-[center_top] hover:object-[center_bottom] transition-all ease-in-out duration-[10000ms]"
            />
          </a>
        </div>
        <div className="flex flex-col items-center pt-5">
          <h2 className="font-bold text-xl dark:text-white">{project.proName}</h2>
          <p className="max-w-md font-medium text-center mt-6 dark:text-gray-500">
            {project.proDescription}
          </p>
          <ul className="flex  flex-wrap  gap-4 mt-4">
            {project.techStack.map((img) => {
              return (
                <li key={img}>
                  <img
                    className="h-10 cursor-pointer"
                    src={`images/${img}`}
                    alt=""
                    title={`${img}`.split(".")[0]}
                  />
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap gap-8 mt-10 dark:text-gray-400">
            {project.gitHub && (
              <a
                href={`${project.gitHub}`}
                target="_blank"
                rel="noreferrer"
                className="text-xl flex align-center gap-2 hover:dark:text-white"
              >
                Code <i className="bx bxl-github text-2xl"></i>
              </a>
            )}
            <a
              href={`${project.demo}`}
              target="_blank"
              className="text-xl flex align-center gap-2 hover:dark:text-white"
              rel="noreferrer"
            >
              Demo <i className="bx bxs-right-top-arrow-circle text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
