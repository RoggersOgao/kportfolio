import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from '../ExperienceCard'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
    <h3 className="absolute top-12 uppercase tracking-[20px] text-[#F7AB4A]/40">Experience</h3> 

    <div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
    </div>
    </motion.div>
  )
}

export default Experience