function Footer() {
  const footerYear = new Date().getFullYear()

  return (
   <section
      className='bg-brightOrange mt-10'
   >
      <div className='container mx-auto pt-16 pb-20'>
         <img src="../assets/kamatis.png" style={{ width: '4rem' }} className="mx-auto mb-3"/>
         <p className='text-xs text-center uppercase text-white'>&copy; {footerYear} Angelito De Mesa III. All Rights Reserved.</p>
      </div>
   </section>
  )
}

export default Footer