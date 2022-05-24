import React from 'react'

const Products = () => {
  return (
    <div className="w-[95%] md:w-full mx-auto">
         <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#061357] my-16 lg:my-20'> Our Products </h2>
      <div className="px-2 sm:px-4 md:px-10 w-[80%] md:flex mx-auto justify-between">
        <div className="block sm:flex md:block rounded overflow-hidden shadow-lg bg-[#061357] md:mx-5 md:pb-20 my-10 md:my-2 items-center">
         <div className='mr-5'>
         <img src="./images/man.png" alt="img" className='h-auto md:h-[200px] mx-auto mt-10 mb-10 md:mt-20 pl-5 md:pl-0'/>
         </div>
          <div className="md:px-6 py-4 text-center sm:text-left md:text-center w-[90%] lg:w-[80%] mx-auto">
            <div className="font-bold text-2xl lg:text-3xl my-5 text-white"> Internship portal </div>
            <p className="text-[17px] text-white pr-2 md:pr-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim volutpat, urna auctor sed.
            </p>
            <div className="md:px-6 py-10 text-center sm:text-left md:text-center">
            <span className="text-center inline-block rounded-md px-6 py-3 text-md md:text-lg font-semibold bg-[#7443DE] text-white mb-2 w-[170px] lg:w-[200px]">
            Get internship
            </span> 
          </div>
          </div>
        
        </div>

        <div className="block sm:flex md:block rounded overflow-hidden shadow-lg bg-[#061357] md:mx-5 md:pb-20 my-10 md:my-2 items-center">
         <div className='mr-5'>
         <img src="./images/job.png" alt="img" className='h-auto md:h-[200px] mx-auto mt-10 mb-10 md:mt-20 pl-5 md:pl-0'/>
         </div>
          <div className="md:px-6 py-4 text-center sm:text-left md:text-center w-[90%] lg:w-[80%] mx-auto">
            <div className="font-bold text-2xl lg:text-3xl my-5 text-white"> Job Portal </div>
            <p className="text-white text-[17px] pr-2 md:pr-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim volutpat, urna auctor sed.
            </p>
            <div className="md:px-6 py-10 text-center sm:text-left md:text-center">
            <span className="text-center inline-block rounded-md px-6 py-3 text-md md:text-lg font-semibold bg-[#7443DE] text-white mb-2 w-[170px] lg:w-[200px]">
            Get a Job
            </span>
          </div>
          </div>
        </div>

      </div>
    </div>
  
  )
}

export default Products