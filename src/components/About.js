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
                I love to learn and create, whether it's frontend projects, music, rap, prose or poetry.
                Oh also, I'm a huge fan of EDM, Rock and Hip-Hop music!
            </p>
            <br></br>
            <p className='text-sm'>When I'm not making web interfaces, I can be found creating music or writing rap verses, or reading about dinosaurs, watching anime or learning how to play keys. :)</p>
        </article>
    </motion.div>
  )
}

export default About
