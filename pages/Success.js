import Image from "next/image"
import Link from "next/link"
import kamatis from '../public/assets/kamatis.png'

function Success() {
   
   return (
      <div className='flex flex-col items-center justify-center h-screen w-full'>
         <div className="flex flex-col items-center">
            <div className="w-28">
               <Image src={kamatis}/>
            </div>
            <h1 className='text-2xl lg:text-4xl text-center text-brightOrange font-black mt-5 mb-12'>Thank you for getting in touch! :)</h1> 
         </div>
         <Link href="/">
            <a 
               className='bg-gradient-to-r from-brightOrange to-brightYellow 
               text-white px-12 py-4 rounded-md cursor-pointer'
            >
               Go Back
            </a>
         </Link>
        
      </div>
   )
}

export default Success