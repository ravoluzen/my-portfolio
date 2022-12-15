import React from 'react'
import Project from './Project'
import {motion} from 'framer-motion'
import projects from '../data/projects.json';


const Projects = () => {
  console.log("Projects")
  
  return (
    <motion.div className='mt-32 p-12 h-auto flex flex-col justify-evenly items-start md:items-center'
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}>
        <h1 className='font-bold text-base mb-8'>Some of my recent projects</h1>
        <main className='w-full grid grid-cols-1 gap-10 items-start md:grid-cols-2 lg:grid-cols-4'>
            {projects ? (projects.map(project => (
                <Project 
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    site={project.site}
                    github={project.github}
                />
            ))):(<h1>Loading...</h1>)}
        </main>
        <p className='mt-12 md:mt-16 underline decoration-green-400 hover:decoration-purple-600 hover:decoration-4'><a href='https://github.com/ravoluzen' target='_blank.'>Github</a></p>
    </motion.div>
  )
}

export default Projects
