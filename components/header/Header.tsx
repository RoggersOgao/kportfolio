import React from 'react'
import {FaFacebookF, FaYoutube, FaShareAlt, FaTwitter, FaGithub, FaEnvelope} from 'react-icons/fa'
import {motion} from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className='flex justify-between sticky p-5 top-0 max-w-7xl mx-auto z-20 xl:item-center'>
      <motion.div
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}

      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5
      }}
      className='flex gap-[15px] text-gray-400 items-center '>
      <a href="www.youtube.com"><FaFacebookF className='hover:text-gray-600' /></a>
      <a href="www.youtube.com"><FaGithub className='hover:text-gray-600' /></a>
      <a href="www.youtube.com"><FaYoutube className='hover:text-gray-600' /></a>
      <a href="www.youtube.com"><FaTwitter className='hover:text-gray-600' /></a>
      <a href="www.youtube.com"><FaShareAlt className='hover:text-gray-600' /></a>
      </motion.div>
      <motion.div
      initial={{
        x:500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5
      }}

      className='text-gray-400 flex gap-4 items-center cursor-pointer'>
      <a href="www.youtube.com"><FaEnvelope className='hover:text-gray-600' /></a>
      <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
      </motion.div>
    </header>
  )
}

export default Header