import {BsArrowDownCircle} from 'react-icons/bs'
import {motion} from 'framer-motion'
import Image from 'next/image'
import angelits from '../public/assets/Angelits_hero.png'

function Hero() {
  return (
      <section className='flex flex-col-reverse justify-between items-center 
        pt-8 pb-16 px-4 md:pt-22 md:flex-row lg:pt-18 xl:pt-6 xl:pb-0 relative
      '
      > 
         {/* left  */}
         <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            transition={{ duration: 1.1 }}
            className='mx-auto md:mx-0 flex-0 mt-5'
         >
            <div className='flex justify-between items-center mb-1'>
               <h3 className='font-bold text-2xl xl:text-4xl'>Hello, I Am</h3>
               <p className='uppercase text-xs bg-brightOrange rounded-2xl 
               px-4 py-1 text-white font-bold md:text-xs xl:py-3 xl:px-6 xl:rounded-3xl
               '
               >
                  Artist
               </p>
            </div>
            <h1 className='font-black text-7xl text-brightOrange pt-2 pb-6 
            xl:text-8xl xl:pb-10'
            >
               Angelo
            </h1>
            <p className='text-lg xl:text-2xl text-center md:text-left'>I love to draw. That's all.</p>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1,  transition: {
                  delay: 1.2
               } }}
               className='hidden absolute -bottom-32 md:flex'
            >
                <BsArrowDownCircle className='flex justify-center text-4xl text-brightOrange md:text-5xl xl:text-6xl animate-bounce'/>
            </motion.div>
         </motion.div>
         {/* right  */}
         <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            transition={{ duration: 1.1 }}
            className="md-2"
         >
            <Image src={angelits} alt="logo" className='img-hero'/>
         </motion.div>
      </section>
  )
}

export default Hero