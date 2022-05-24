import React from 'react'

const AppBanner = () => {
  return (
    <div>
      <section className="relative overflow-x-hidden bg-img">
        <div className="mx-auto">
          <div className="block lg:flex items-center w-[80%] sm:w-[60%] lg:w-[80%] mx-auto">

            <div className="w-full lg:w-1/2">
              <div className="py-4 lg:py-10">
                <h1 className="text-4xl lg:text-5xl font-bold font-heading text-white my-16 text-center lg:text-left"> OUR APPS </h1>
                <h2 className="text-lg font-heading text-white my-5 text-center lg:text-left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim volutpat, urna auctor sed. </h2>
           <div className='w-auto xs:w-[70%] sm:w-[60%] md:w-[50%] lg:w-full mx-auto lg:mx-0'>
           <ul className='my-10 justify-center'>
                    <li className='text-white text-lg'> ● &nbsp; Get offline access </li>
                    <li className='text-white text-lg'> ● &nbsp; Easy Download options </li>
                    <li className='text-white text-lg'> ● &nbsp; Instant notifications </li>
                </ul>
           </div>
                {/* <a className="inline-block bg-[#6D8DA4] hover:bg-[#5f7c91] text-white font-bold font-heading py-4 px-20 rounded-md uppercase transition duration-200" href="#" >More</a> */}
            <div className='hidden lg:block'>
            <div className='flex my-16'>
                    <img src="./images/gp.png" alt="img" className='mr-5 my-5'/>
                    <img src="./images/as.png" alt="img" className='ml-5 my-5'/>
                </div>
            </div>
                
              </div>
            </div>

         <div className='w-full lg:w-1/2'>
           <div className="">
              <img className="" src="./images/banner.png" alt="banner" />
           </div>
           <div className='block md:flex my-16 lg:hidden justify-center mx-auto w-full md:w-[80%]'>
                    <img src="./images/gp.png" alt="img" className='mx-auto my-5 md:mr-2'/>
                    <img src="./images/as.png" alt="img" className='mx-auto my-5 md:ml-2'/>
                </div>
         </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppBanner