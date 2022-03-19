import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Projects from './Projects'

const Nav = () => {
  return (
      <div className='fixed h-32 pb-4 w-full top-0 shadow bg-just-black flex items-end font-bold'>
          <section className='w-full flex justify-around md:justify-evenly text-base md:text-lg'>

          <Link 
          to='/' 
          key='home'  
          className='underline decoration-green-500 decoration-2 hover:decoration-purple-600 hover:decoration-4'>
            Home
          </Link>

          <Link 
          to='Projects' 
          key='projects' 
          className='underline decoration-green-500 decoration-2 hover:decoration-purple-600 hover:decoration-4'>
            Projects
          </Link>

          <Link 
          to='About' 
          key='about' 
          className='underline decoration-green-500 decoration-2 hover:decoration-purple-600 hover:decoration-4'>
            About
          </Link>

          </section>
      </div>
  )
}

export default Nav