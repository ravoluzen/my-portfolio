import React from 'react'
import { FaGithubSquare as Github, FaTwitterSquare as Twitter, FaLinkedin as Linkedin, FaYoutubeSquare as Youtube } from 'react-icons/fa'
import {motion} from 'framer-motion'
import dp from '../images/dp.jpg'

const Home = () => {
  return (
    <motion.div 
    className="overflow-hidden App flex flex-col justify-center items-start md:items-center mt-32 md:mt-48 p-10 pt-12"
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}>
        <section 
        className='grid grid-cols-1 items-start md:grid-cols-2 md:items-center'>

            <picture>
                <img src={dp} alt='my profile' className='mb-4 w-32 h-32 rounded-full object-cover md:h-48 md:w-48 md:mb-0'></img>
            </picture>

            <article>

                <h1 className='text-xl font-bold font-sans md:text-4xl'>Raj Shankar Tiwary</h1>
                <h3 className='font-normal underline decoration-purple-600 decoration-4 md:text-xl'>Frontend Developer</h3>
                <p className='text-sm md:text-base'>(Who also produces music and writes content)</p>
                <br></br>
                <p className='text-sm md:text-base'>I'm currently learning and creating stuff with ReactJS.</p>
            
            </article>
        </section>
        <section className='w-3/5 md:w-2/5 flex flex-row items-start justify-between md:justify-evenly mt-12 md:mt-24'>
            <a href='https://github.com/ravoluzen' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <Github/>
            </a>
            <a href='https://twitter.com/ravoluzen' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <Twitter/>
            </a>
            <a href='https://www.linkedin.com/in/raj-shankar-tiwary-053b86189/' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <Linkedin className='object-cover'/>
            </a>
            <a href='https://www.youtube.com/channel/UC2WORMry3AFSGRqB9pV6g2A' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <Youtube className='object-cover'/>
            </a>
        </section>
    </motion.div>
  )
}

export default Home
