import Image from 'next/image'
import {motion} from 'framer-motion'
type Props = {}

function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
    <h3 className="absolute top-12 uppercase tracking-[20px] text-[#F7AB4A]/40">About</h3>  

    <motion.div 
    initial={{
      y:400,
      opacity:0.2
    }}
    transition={{
      duration:1
    }}
    whileInView={{
    y:0,
    opacity:1
    }}
    // viewport={{
    //   once:true
    // }}
    className='flex flex-col justify-center items-center gap-[20px] md:flex-row'>
    <Image
    className='rounded-full w-[150px] h-[150px] object-cover object-top md:h-[400px] md:w-[300px] md:rounded flex-shrink-0'
    src="/images/kevo2.jpg"
    alt="Kelvin photo in black"
    width={150}
    height={150}
    priority
    />
    <div>
  <h1 className='text-xl text-bold uppercase text-[#F7AB4A]/40 pt-[40px]'>My Background</h1>
  <p className='text-gray-500 text-sm md:w-[550px] pt-[20px]'>
  I am a motivated professional offering proficiency in my work and also passionate
  about technology. I am efficient in overseeing project deadlines by priority and
  communication with teammates.
  I will utilize my technical skills and provide a professional service to clients by
  applying my knowledge while working in a challenging and motivating working
  environment.
  </p>

    </div>
    </motion.div>
    
    </div>
  )
}

export default About