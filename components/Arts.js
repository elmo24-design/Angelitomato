import Image from "next/image";
import moment from "moment";
import { useState } from "react";
import ImageModal from "./ImageModal";
import { motion } from 'framer-motion';

function Arts({arts, featuredArts, digitalArts, inkedArts }) {

   const [chosen, setChosen] = useState(arts) 
   
   const [chosenArt, setChosenArt] = useState(null) //for the modal

   return (
      <>
         {
            chosenArt &&
            <ImageModal chosenArt={chosenArt} setChosenArt={setChosenArt} />
         }
       
         <motion.section
            whileInView={{ y: [100, 50, 0], opacity: [ 0, 0, 1] }}
            transition={{ duration: 0.5 }} 
            className='container mx-auto mt-10 px-1 md:px-2 lg:px-40'
         >
            <h1 className="text-center text-2xl font-black text-brightOrange xl:text-3xl"><span className="text-black">My</span> Arts</h1>

            {/* Featured div  */}
            <h2 className="mt-10 font-black text-xl text-mattBlack mb-5">Featured</h2>
            <div 
               className="flex flex-col gap-5 md:flex-row"
            >
               {/* first div  */}
               <div className="md:w-3/5 shadow-md">
                  <Image src={featuredArts[0].coverPhoto.url} 
                     className="rounded-lg object-cover cursor-pointer hover:scale-110 ease-in duration-200" 
                     width={'100%'} 
                     height={'100%'} 
                     layout='responsive'
                     onClick={() => setChosenArt(featuredArts[0])}
                  />
                  <div className="p-5">
                     <h3 className="text-md font-bold">{featuredArts[0].title}</h3>
                     <p className="text-gray-800 text-xs">Published: {moment(featuredArts[0].datePublished).format("LL")}</p>
                  </div>
               </div>
               {/* Second div */}
               <div className="flex flex-col md:w-2/5">
                  <div className="shadow-md">
                     <Image src={featuredArts[1].coverPhoto.url} 
                        className="rounded-lg object-cover cursor-pointer hover:scale-110 ease-in duration-200" 
                        width={'100%'} 
                        height={'63%'} 
                        layout='responsive'
                        onClick={() => setChosenArt(featuredArts[1])}
                     />
                     <div className="p-5">
                        <h3 className="text-md font-bold">{featuredArts[1].title}</h3>
                        <p className="text-gray-800 text-xs">Published: {moment(featuredArts[1].datePublished).format("LL")}</p>
                     </div>
                  </div>
                  <div className="shadow-md md:mt-auto">
                     <Image src={featuredArts[2].coverPhoto.url} 
                        className="rounded-lg object-cover cursor-pointer hover:scale-110 ease-in duration-200" 
                        width={'100%'} 
                        height={'63%'} 
                        layout='responsive'
                        onClick={() => setChosenArt(featuredArts[2])}
                     />
                     <div className="p-5">
                        <h3 className="text-md font-bold">{featuredArts[2].title}</h3>
                        <p className="text-gray-800 text-xs">Published: {moment(featuredArts[2].datePublished).format("LL")}</p>
                     </div>
                  </div>
               </div>
            </div>
         
            {/* All Arts div  */}
            <div className="mt-10 pb-10">
               <h2 className="font-black text-xl text-mattBlack mb-5">All Arts</h2>

               <div className="mb-5">
                  <div className={`inline-block border-solid  border-brightOrange text-brightOrange 
                  font-bold text-xs rounded-lg py-1 px-4 cursor-pointer ${chosen === arts ? "bg-brightOrange text-white" : ""} hover:bg-brightOrange hover:text-white duration-300`}
                  onClick={() => setChosen(arts)}>
                     All
                  </div>
                  <div className={`inline-block border-solid  border-brightOrange text-brightOrange 
                  font-bold text-xs rounded-lg py-1 px-4 ml-2 cursor-pointer ${chosen === digitalArts ? "bg-brightOrange text-white" : ""} hover:bg-brightOrange hover:text-white duration-300`}
                  onClick={() => setChosen(digitalArts)}>
                     Digital Arts
                  </div>
                  <div className={`inline-block border-solid  border-brightOrange text-brightOrange 
                  font-bold text-xs rounded-lg py-1 px-4 ml-2 cursor-pointer ${chosen === inkedArts ? "bg-brightOrange text-white" : ""} hover:bg-brightOrange hover:text-white duration-300`}
                  onClick={() => setChosen(inkedArts)}>
                     Ink Drawing
                  </div>
               </div>
               {/* Arts Card Container  */}
               <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
                  {chosen.map(art => (
                     // Arts Card 
                     <div key={art.id} className="shadow-md">
                        <Image src={art.coverPhoto.url} 
                           className="rounded-lg object-cover cursor-pointer hover:scale-110 ease-in duration-200" 
                           width={'100%'} 
                           height={'70%'} 
                           layout='responsive'
                           onClick={() => setChosenArt(art)}
                        />
                        <div className="p-5">
                           <h3 className="text-sm font-bold">{art.title}</h3>
                           <p className="text-gray-800 text-xs">Published: {moment(art.datePublished).format("LL")}</p>
                        </div>
                     </div>
                  ))}
               </motion.div>
            </div>
         </motion.section>
      </>
   )
}


export default Arts