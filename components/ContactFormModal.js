import {AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion'

const backdropVariants = {
   hidden: {
      opacity: 0,
      x: '100vw'
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         type: 'spring',
         delay: 0.1
      }
   },
   exit: {
      x: '-100vw',
      transition: {
         ease: 'easeInOut'
      }
   }
}

function ContactFormModal({setShowContactModal}) {
  
  return (
   <>
      <motion.div
         className="backdrop fixed top-0 left-0 w-full h-full bg-white
         z-10"
         variants={backdropVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
      >
         <AiOutlineClose onClick={() => setShowContactModal(false) }
         className="text-3xl text-brightOrange font-black cursor-pointer
         absolute top-2 left-2
         "
         />

         <div className='flex flex-col items-center justify-center relatve h-full px-2 pb-6'>
            <h1 className='text-center text-3xl font-black text-brightOrange'>Contact Me</h1>
            <form className='mt-5 w-full md:w-3/5 lg:w-2/4' name="contact" method="POST" data-netlify="true" >

               <div className='flex flex-col w-full'>
                  <label className='text-sm'>Name</label>
                  <input type="text" name="name" className='bg-lightGray p-2 rounded-sm outline-none mt-1' required/>
               </div>

               <div className='flex flex-col w-full mt-4'>
                  <label className='text-sm'>E-Mail Address</label>
                  <input type="email" name="email" className='bg-lightGray p-2 rounded-sm outline-none mt-1' required/>
               </div>

               <div className='flex flex-col w-full mt-4'>
                  <label className='text-sm'>Message</label>
                  <textarea cols="30" rows="10" name="message" className='bg-lightGray mt-1 p-2 max-h-40 outline-none' required>

                  </textarea>
               </div>

               <button type="submit" className='bg-brightOrange w-full text-sm rounded-sm text-white
               p-2 py-3 mt-4 hover:bg-brightOrange/90 duration-200
               '>
                  Submit
               </button>
               
            </form>
            <img src="../assets/kamatis.png" alt="tomato" 
               className='absolute -bottom-4 -right-14 w-40 rotate-12 md:w-80 md:-bottom-8 md:-right-28' 
            />
         </div>
      </motion.div>
   </>
  )
}

export default ContactFormModal