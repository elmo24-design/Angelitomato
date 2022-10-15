import kamatis from '../public/assets/kamatis.png'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image'
import { useState } from 'react';
import ContactFormModal from './ContactFormModal';
import { motion } from 'framer-motion';


const navVariants = {
   hidden: {
      opacity: 0,
   },
   visible: {
      opacity: 1,
      transition: {
         delay: 1.2
      }
   },
 }

function Header() {

  const [showContactModal, setShowContactModal] = useState(false)

  return (
   <>
      {
         showContactModal &&
         <ContactFormModal setShowContactModal={setShowContactModal}/>
      }
      <motion.nav
         variants={navVariants}
         initial="hidden"
         animate="visible"
         className='pt-7 flex justify-between items-center'
      >
         <div className='flex items-center'>
            <Image src={kamatis} width={70} height={50}/>
            <h3 className='  text-brightOrange font-black pt-2 hidden md:flex'>angelitomato</h3>
         </div>
         <div className='flex items-center'>
            <BsFillMoonStarsFill className='text-brightOrange text-2xl cursor-pointer'/>
            <a 
               href="#" 
               className='flex items-center bg-gradient-to-r from-brightOrange to-brightYellow 
               text-white px-4 py-2 rounded-md ml-8 md:px-6 cta'
               onClick={() => setShowContactModal(true)}
            >
               Contact Me
               <FaArrowRight className='ml-3 arrow-right'/>
            </a>
         </div>
      </motion.nav> 
   </>
  )
}

export default Header