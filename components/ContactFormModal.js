import {AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion'
import Image from 'next/image'
import kamatis from '../public/assets/kamatis.png'
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from 'next/router';

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
      x: '100vw',
      transition: {
         ease: 'easeInOut'
      }
   }
}

function ContactFormModal({setShowContactModal}) {
   const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

   const router = useRouter()

   if (state.succeeded) {
      router.push('/Success')
   }

  return (
   <>
      <motion.div
         className="backdrop fixed top-0 left-0 w-full h-full bg-white dark:bg-mattBlack
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
            <form className='mt-5 w-full md:w-3/5 lg:w-2/4' name="contact" onSubmit={handleSubmit}>

               <div className='flex flex-col w-full'>
                  <label htmlFor='name' className='text-sm'>Name</label>
                  <input type="text" name="name" id="name" className='bg-lightGray dark:bg-gray-700 p-2 rounded-sm outline-none mt-1' required/>
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
               </div>

               <div className='flex flex-col w-full mt-4'>
                  <label htmlFor='email' className='text-sm'>E-Mail Address</label>
                  <input type="email" name="email" id="email" className='bg-lightGray dark:bg-gray-700 p-2 rounded-sm outline-none mt-1' required/>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
               </div>

               <div className='flex flex-col w-full mt-4'>
                  <label htmlFor='message' className='text-sm'>Message</label>
                  <textarea cols="30" rows="10" name="message" id="message" className='bg-lightGray dark:bg-gray-700 mt-1 p-2 max-h-40 outline-none' required>

                  </textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
               </div>

               <button type="submit" className='bg-brightOrange w-full text-sm rounded-sm text-white
               p-2 py-3 mt-4 hover:bg-brightOrange/90 duration-200
               '>
                  Submit
               </button>
               
               <ValidationError errors={state.errors} />
            </form>
            <div className='absolute -bottom-6 -right-14 w-36 rotate-12 md:w-72 lg:w-80 md:-bottom-12 md:-right-28' >
               <Image src={kamatis} alt="tomato" />
            </div>
         </div>
      </motion.div>
   </>
  )
}

export default ContactFormModal