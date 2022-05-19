import React from 'react'

const Products = () => {
  return (
    <div className="w-[95%] md:w-full mx-auto">
         <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#061357] my-16 lg:my-20'> Our Products </h2>
      <div class="px-2 sm:px-4 md:px-10 mx-5 md:flex pb-20">
        <div class="rounded overflow-hidden shadow-lg bg-[#061357] md:mx-5 pb-20 my-10 md:my-2">
          <img class="w-full" src="./images/man.png" alt="img" className='mx-auto mt-20 mb-10 h-[200px]'/>
          <div class="px-6 py-4 text-center w-[90%] lg:w-[80%] mx-auto">
            <div class="font-bold text-2xl lg:text-3xl my-5 text-white"> Internship portal </div>
            <p class="text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim volutpat, urna auctor sed.
            </p>
          </div>
          <div class="px-6 py-6 text-center">
            <span class="inline-block rounded-md px-6 py-3 text-md md:text-lg font-semibold bg-[#7443DE] text-white mb-2 w-[180px] md:w-[200px]">
            Get internship
            </span>
          
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg bg-[#061357] md:mx-5 pb-20 my-10 md:my-2">
          <img class="w-full" src="./images/job.png" alt="img" className='mx-auto mt-20 mb-10  h-[200px]'/>
          <div class="px-2 sm:px-6 py-4 text-center w-[90%] lg:w-[80%] mx-auto">
            <div class="font-bold text-2xl lg:text-3xl my-5 text-white"> Job Portal </div>
            <p class="text-white text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim volutpat, urna auctor sed.
            </p>
          </div>
          <div class="px-6 py-6 text-center">
            <span class="inline-block rounded-md px-6 py-3 text-md md:text-lg font-semibold bg-[#7443DE] text-white mb-2 w-[180px] md:w-[200px]">
            Get a Job
            </span>
         
          </div>
        </div>

      </div>
    </div>
  
  )
}

export default Products