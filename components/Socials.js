import {BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { motion } from 'framer-motion'

function Socials() {
  return (
   <motion.section
      whileInView={{ x: [100, 0], opacity: [ 0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className='bg-brightOrange w-full h-40 xl:mt-36 md:h-44 xl:h-56'
   >
      <div className='container mx-auto px-1 py-8 md:px-2 lg:px-40'>
         <h1 className='text-center text-white text-lg font-bold xl:text-2xl'>Follow Me</h1>
         <div className='flex flex-row items-center justify-center text-white text-4xl 
         space-x-16 mt-5 cursor-pointer md:text-5xl md:space-x-20 xl:mt-10 xl:space-x-32 xl:text-6xl'>
            <a href="https://www.instagram.com/_angelitomato_/?hl=en" rel="noreferrer" target="_blank">
               <BsInstagram className='hover:scale-125 ease-in duration-300 '/>
            </a>
            <a href="https://www.facebook.com/angelo.demesa.982" rel="noreferrer" target="_blank">
               <BsFacebook className='hover:scale-125 ease-in duration-300 '/>
            </a>
            <a href="https://www.youtube.com/channel/UCH_GjWP_3E0iXRVcrqPXhrA" rel="noreferrer" target="_blank">
               <BsYoutube className='hover:scale-125 ease-in duration-300 '/>
            </a>
            
         </div>
      </div>
   </motion.section>
  )
}

export default Socials