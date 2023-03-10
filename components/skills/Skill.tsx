import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?:boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
    <motion.img 
    initial={{
        x:directionLeft ? -200: 200,
        opacity:0,
    }}
    transition={{
        duration:1
    }}
    whileInView={{
        opacity: 1, 
        x:0
    }}
    src="/images/kevo.jpg"
    className='rounded-full border border-gray-500 object-cover w-14 h-14 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-200 ease-in-out'
    />
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xl:w-20 xl:h-20 rounded-full'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-xl font-bold text-black opacity-100'>100%</p>
        </div>
    </div>
    </div>
  )
}

export default Skill