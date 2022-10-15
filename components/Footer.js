import Image from "next/image"
import kamatis from '../public/assets/kamatis.png'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
   <section
      className='bg-brightOrange mt-10'
   >
      <div className='container mx-auto pt-16 pb-20'>
         <div className="mx-auto mb-3 w-20">
            <Image src={kamatis} />
         </div>
         <p className='text-xs text-center uppercase text-white'>&copy; {footerYear} Angelito De Mesa III. All Rights Reserved.</p>
      </div>
   </section>
  )
}

export default Footer