import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div className='mt-32 p-10 pt-12 h-auto flex flex-col justify-evenly items-start md:items-center'
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}>
        <article className='grid grid-cols-1 md:items-center md:w-2/5 md:p-2'>
            <h1 className='font-bold text-lg mb-8'>A lil' piece of me</h1>
            <p className='text-sm'>
                <span className='underline decoration-purple-600 decoration-4'>Curious & Creative</span>; that's how I would describe myself if I had only two words to do so.
            </p>
            <br></br>
            <p className='text-sm'>
                I love to learn new stuff and get an high off of creating, whether it's frontend projects, music or a written piece.
            </p>
            <br></br>
            <p className='text-sm'>
                I'm a CSE undergrad in my final year and I'm looking for <span className='underline decoration-purple-600 decoration-4'>frontend internships</span> where I can contribute and learn, and also join as a full timer if given a chance to create an even bigger impact.
            </p>
            <br></br>
            <p className='text-sm'>Hit me up on <a href='https://twitter.com/ravoluzen' target='_blank.' className='underline decoration-green-500 decoration-2 hover:decoration-purple-600'>Twitter</a> or <a href='https://www.linkedin.com/in/raj-shankar-tiwary-053b86189/' target='_blank.' className='underline decoration-green-500 decoration-2 hover:decoration-purple-600'>Linkedin</a>.</p>
            <p className='text-sm'>Or send a <a href='mailto: rajshankartiwary@gmail.com' target='_blank.' className='underline decoration-green-500 decoration-2 hover:decoration-purple-600'>mail</a>.</p>
            <br></br>
            <p className='text-sm'>Thanks for reading :)</p>
        </article>
    </motion.div>
  )
}

export default About