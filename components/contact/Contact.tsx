import React from 'react'
import motion from 'framer-motion'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
type Props = {}

function Contact({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
        <p className="absolute top-16 tracking-[20px] text-[#F7AB4A]/40 uppercase">
        Contact
      </p> 

      <div className='space-y-5 flex flex-col items-center'>
        <h1 className='text-xl font-bold capitalize'><span className='text-[#F7AB4A]/40'>Contact me:</span>For more info</h1>
        <div className='flex items-center gap-3'><FaPhone size={15} className="text-[#F7AB4A]/40"/> +254700601885</div>
        <div className='flex items-center gap-3'><FaEnvelope size={15} className="text-[#F7AB4A]/40"/> roggersog@gmail.com</div>
        <div className='flex items-center gap-3'><FaLocationArrow size={15} className="text-[#F7AB4A]/40"/> nairobi, Kenya</div>

        <form action="" className='flex flex-col space-y-2 w-fit mx-auto px-5'>
            
            {/* name group */}
            <div className='flex gap-2 text-xs lg:text-sm'>
                <input className="contactInput" type="text" name="" id="" placeholder='Name'/>
                <input className="contactInput" type="text" name="" id="" placeholder='Email'/>
            </div>

            <input className="contactInput text-xs lg:text-sm" type="text" name="" id="" placeholder='Subject'/>

            <textarea className="contactInput text-xs lg:text-sm" name="" id="" placeholder='Message'/>
            <button type="submit" className='bg-[orange]/60 py-3 xl:py-4 px-10 rounded-md text-white font-bold hover:bg-[orange]/40 transition-all duration-800 ease-in-out'>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default Contact