import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
<motion.div 
initial={{
    opacity:0,
    y:-100
}}
whileInView={{
    opacity:1,
    y:0
}}
transition={{
    duration:1.5
}}
>
    <Image 
    src="/images/kevo.jpg"
    className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover"
    alt="Project Manager that is an image of Me"
    width={100}
    height={100}
    />
</motion.div>

<div className='px-0 md:px-10 flex-shrink-0'>
    <h4 className='text-2xl  font-bold '>CEO & Founder of KP Tech</h4>
    <p className='text-md font-light text-gray-500'>Where intellect meets Technology</p>

    <div className='flex space-x-1'>
        
        
    </div>
    <p className='uppercase py-3 text-gray-400 font-medium'> Started work... Ended...</p>

    <ul className='list-disc space-y-4 mt-5 text-xs text-left text-gray-500'>
        <li>Summary Points Summary Points Summary Points Summary</li>
        <li>Summary Points Summary Points Summary Points Summary</li>
        <li>Summary Points Summary Points Summary Points Summary</li>
        <li>Summary Points Summary Points Summary Points Summary</li>
        <li>Summary Points Summary Points Summary Points Summary</li>
        
    </ul>
</div>
    </article>
  )
}

export default ExperienceCard