import React from 'react'

const AppBanner = () => {
  return (
    <div>
      <section class="relative overflow-x-hidden bg-img">
        <div class="mx-auto">
          <div class="block lg:flex items-center w-[60%] lg:w-[80%] mx-auto">

            <div class="w-full lg:w-1/2">
              <div class="py-4 lg:py-10">
                <h1 class="text-4xl lg:text-5xl font-bold font-heading text-white my-16 text-center lg:text-left"> OUR APPS </h1>
                <h2 class="text-lg font-heading text-white my-5 text-center lg:text-left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim volutpat, urna auctor sed. </h2>
                <ul className='ml-5 my-10 justify-center'>
                    <li className='list-disc text-white text-lg'> Get offline access </li>
                    <li className='list-disc text-white text-lg'> Easy Download options </li>
                    <li className='list-disc text-white text-lg'> Instant notifications </li>
                </ul>
                {/* <a class="inline-block bg-[#6D8DA4] hover:bg-[#5f7c91] text-white font-bold font-heading py-4 px-20 rounded-md uppercase transition duration-200" href="#" >More</a> */}
            <div className='hidden lg:block'>
            <div className='flex my-16'>
                    <img src="./images/gp.png" alt="img" className='mr-5 my-5'/>
                    <img src="./images/as.png" alt="img" className='ml-5 my-5'/>
                </div>
            </div>
                
              </div>
            </div>

         <div className='w-full lg:w-1/2'>
           <div class="">
              <img class="" src="./images/banner.png" alt="banner" />
           </div>
           <div className='block md:flex my-16 lg:hidden justify-center'>
                    <img src="./images/gp.png" alt="img" className='mx-auto my-5'/>
                    <img src="./images/as.png" alt="img" className='mx-auto my-5'/>
                </div>
         </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppBanner