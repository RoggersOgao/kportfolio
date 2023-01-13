import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
type Props = {}

function Project({}: Props) {

  const projects = [1, 2, 3, 4, 5]
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
    <p className="absolute top-16 tracking-[20px] text-[#F7AB4A]/40 uppercase">
        Projects
      </p>    

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory x-20'>

      {projects.map((project, index)=>(
        <div className='w-screen flex-shrink-0 snap-center flex flex-col  item-center justify-center p-20 md:p-44 h-screen'>
        <motion.div
        initial={{
          y:-200,
          opacity:0
        }}
        whileInView={{
          y:0,
          opacity:1
        }}
        transition={{
          duration:1.2
        }}
        viewport={{
          once:true
        }}

        className="flex justify-center"
        >
        <Image 
        src="/images/project.png"
        alt="project picture"
        width={400}
        height={300}
        />
        </motion.div>

        <motion.div className='flex flex-col items-center'
        initial={{
          y:200,
          opacity:0
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:1.2
        }}
        viewport={{
          once:true
        }}
        >
          <h4 className='font-bold pb-4 text-2xl uppercase'>Case Study {index + 1} of {projects.length}</h4>

          <p className='max-w-lg text-xs lg:text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit distinctio ducimus cumque voluptate asperiores consequatur perspiciatis vero, eos, magni aliquam eaque a adipisci, exercitationem provident reiciendis ex incidunt repellat.</p>
        </motion.div>
        </div>
      ))}
    </div>
      <div className='w-full absolute top-[30%] bg-[#F7A58A]/10 left-0 h-[300px] -skew-y-[4deg] filter blur-[35px]'></div>
    </div>
  )
}

export default Project