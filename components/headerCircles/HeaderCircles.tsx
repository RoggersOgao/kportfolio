import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

function HeaderCircles({}: Props) {
  return (
    <motion.div
    
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,3,1],
        opacity:[.1,.2,.4,.3],
        borderRadius:["20%","30%","50%","20%"]
    }}
    transition={
        {
            duration:2.5
        }
    }
    
    className='relative flex justify-center items-center'>
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping dotted"/>
        <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping dotted"/>
        <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping dotted"/>
        <div className="absolute border border-[#f7abaa] opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse"/>
    </motion.div>
  )
}

export default HeaderCircles