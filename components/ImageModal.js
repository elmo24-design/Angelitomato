import {AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion'
import moment from "moment";

const backdropVariants = {
   hidden:{
      opacity: 0
   },
   visible: {
      opacity: 1
   }
}
const imgVariants = {
   hidden: {
      y: "-100vh"
   },
   visible:{
      y: 0
   }
}

function ImageModal({ chosenArt, setChosenArt }) {
   const handleClick = (e) => {
      if(e.target.classList.contains("backdrop") || e.target.classList.contains("grid-1")){
         setChosenArt(null)
      }
   }

  return (
   <>
      <motion.div onClick={handleClick} 
      className="backdrop fixed top-0 left-0 w-full h-full md:flex justify-center items-center
       bg-neutral-900/75 z-10"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      >
         <motion.div
         variants={imgVariants} 
         className="grid grid-cols-1 md:grid-cols-6 md:h-128 md:w-9/12"
         >
            <div className="grid-1 grid-cols-1 md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-5 flex justify-center items-center  bg-brightOrange/25">
               <div>
                  <img src={chosenArt.coverPhoto.url} className="modal-img" alt="" />
               </div>
            </div>
            <AiOutlineClose
               onClick={() => setChosenArt(null)}
               className='absolute text-4xl m-2 text-black bg-white hover:text-white hover:bg-black duration-100 p-2 cursor-pointer shadow-lg rounded-full' 
            />
            <div className="bg-white overflow-y-scroll md:col-start-4 md:col-end-7 lg:col-start-5 lg:col-end-7 h-80 md:h-full p-3 pb-10">
               <div className='flex flex-row items-center'>
                  <div className='bg-brightOrange rounded-full w-10 h-10 flex items-center justify-center'>
                     <img src="../assets/Angelits_hero.png" className='w-12'  alt="" />
                  </div>
                  <h3 className='  text-brightOrange font-bold text-sm pl-2'>angelitomato</h3>
               </div>
              <div className='mt-2'>
                  <p className="text-gray-800 text-xs">Published: {moment(chosenArt.datePublished).format("LL")}</p>
                  <h2 className='mt-5 font-bold'>{chosenArt.title}</h2>
                     <div 
                        className="text-sm pt-5"
                        dangerouslySetInnerHTML={{__html: chosenArt.content.html}}
                     >
                     </div>
                     <div className='pt-5'>
                        <h2 className='font-bold mb-2 text-sm'>Tags: </h2>
                        <div className='flex flex-row items-center flex-wrap text-sm'>
                           {chosenArt.tags.map((tag, index) => (
                              <div key={index} className="ml-1 mt-2 bg-brightOrange text-white py-1 px-3 rounded-xl">
                                 #{tag}
                              </div>
                           ))} 
                        </div>
                     </div>
                    
              </div>
            </div>
         </motion.div>
      </motion.div>
   </>
  )
}

export default ImageModal