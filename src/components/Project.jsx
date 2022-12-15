import React from 'react'

const Project = ({ image, title, description, site, github }) => {

  
  return (
    <div>
        <article className='border-2 shadow-md shadow-slate-800 border-purple-600 rounded-md p-4 h-96 flex flex-col justify-between'>
            <div>
                <div className='border-2 border-gray-400 mb-4 rounded-md h-36 object-fill'>
                    <img src={image} alt='project thumbnail' className='object-cover h-full w-full'></img>
                </div>
                <h3 className='font-bold underline decoration-purple-600 decoration-4 mb-2'>{title}</h3>
                <p className='text-sm mb-4'>{description}</p>
            </div>
            <span>
                <a href={site} target='_blank.' className='mt-12 underline decoration-green-400'>live site</a>
                <a href={github} target='_blank.' className='m-12 underline decoration-green-400'>source code</a>
            </span>
        </article>
    </div>
  )
}

export default Project