import React from 'react'
import {motion} from 'framer-motion'
import ye from '../images/ye.png'
import witw from '../images/witw.png'
import ip from '../images/ip.png'
import hd from '../images/hd.png'


const Projects = () => {
    console.log("Projects")
  return (
    <motion.div className='mt-32 p-12 h-auto flex flex-col justify-evenly items-start md:items-center'
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}>
        <h1 className='font-bold text-base mb-8'>Some of my recent projects</h1>
        <main className='w-full grid grid-cols-1 gap-10 items-start md:grid-cols-2 lg:grid-cols-4'>
            <article className=''>
                <img src={witw} alt='project thumbnail' className='object-cover'></img>
                <h3 className='font-bold underline decoration-purple-600 decoration-4 mb-2'>Where in the world?</h3>
                <p className='text-sm mb-4'>ReactJS app that uses REST Countries API to fetch and display details about countries. It also lets the user switch themes, search countries and filter them by region.</p>
                <span>
                    <a href='https://where-in-the-world-nine.vercel.app' target='_blank.' className='mt-12 underline decoration-green-400'>live site</a>
                    <a href='https://github.com/ravoluzen/where-in-the-world' target='_blank.' className='m-12 underline decoration-green-400'>source code</a>
                </span>
            </article>
            <article>
                <img src={ip} alt='project thumbnail' className='object-cover'></img>
                <h3 className='font-bold underline decoration-purple-600 decoration-4 mb-2'>IP Address Tracker</h3>
                <p className='text-sm mb-4'>ReactJS app to display various details about an entered IP address using IP Geolocation API alongwith its location on the map using LeafletJS. Initial render displays the user's IP address details.</p>
                <span>
                    <a href='https://react-ip-address-tracker-nine.vercel.app' target='_blank.' className='mt-12 underline decoration-green-400'>live site</a>
                    <a href='https://github.com/ravoluzen/react-ip-address-tracker' target='_blank.' className='m-12 underline decoration-green-400'>source code</a>
                </span>
            </article>
            <article>
                <img src={ye} alt='project thumbnail' className='object-cover'></img>
                <h3 className='font-bold underline decoration-purple-600 decoration-4 mb-2'>Kanye Quotz</h3>
                <p className='text-sm mb-4'>ReactJS app that displays random Kanye West quotes using the Kanye REST API in a tweet layout that is downloadable as an image.</p>
                <span>
                    <a href='https://kanye-quotz.vercel.app' target='_blank.' className='mt-12 underline decoration-green-400'>live site</a>
                    <a href='https://github.com/ravoluzen/kanye-quotz' target='_blank.' className='m-12 underline decoration-green-400'>source code</a>
                </span>
            </article>
            <article>
                <img src={hd} alt='project thumbnail' className='object-cover'></img>
                <h3 className='font-bold underline decoration-purple-600 decoration-4 mb-2'>Header-Dhillon</h3>
                <p className='text-sm mb-4'>NodeJS app that dynamically updates my twitter header with random lyrics from AP Dhillon's discography using API Dhillon, every 60 seconds.</p>        
                <a href='https://github.com/ravoluzen/header-dhillon' target='_blank.' className='m-12 ml-0 underline decoration-green-400'>source code</a>
            </article>
        </main>
        <p className='mt-12 md:mt-16 underline decoration-green-400 hover:decoration-purple-600 hover:decoration-4'><a href='https://github.com/ravoluzen'>Github</a></p>
    </motion.div>
  )
}

export default Projects