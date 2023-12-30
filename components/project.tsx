import React from 'react'
import Image from 'next/image'; 
import { StaticImageData } from "next/image";


interface ProjectProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    link: string;
}
    
function Project( {title, description, image, link}: ProjectProps) {
  return (
    <div className="w-60 max-w-sm rounded-lg shadow ">
      <Image
        className="p-0 h-auto w-full"
        src={image}
        alt="project image"
        width={1000}
        height={1000}
      />

      <div className="px-2 pb-5">
        <a href="#">
          <h5 className="text-xl my-2 font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>

        <hr className="h-px my-4 bg-gray-700 border-0 dark:bg-gray-700"></hr>

        <p className="text-gray-500 dark:text-gray-400">
          {description}
        </p>

        <div className="flex items-center justify-between my-3">
          <a
            href={link}
            className="text-white-700 hover:text-white border border-gray-700 hover:border-none hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500  dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project