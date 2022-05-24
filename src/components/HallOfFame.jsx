import React from 'react'

const HallOfFame = () => {
  return (
  
    <div className="">
      <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#061357] my-16 lg:my-20'> Hall of fame </h2>
      <div className="px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-full lg:w-[90%] mx-auto">
        <div className="bg-white rounded overflow-hidden shadow-lg w-[95%] sm:w-[80%] md:w-full mx-auto border-2">
          <img className="mt-10 mb-5 mx-auto" src="./images/1.png" alt="img" />
          <div className="px-6 py-4 text-center">
            <p className="text-[#061357] font-semibold  text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim volutpat, urna auctor..
            </p>
          </div>
          <div className="px-2 pt-3 pb-5 text-center">
          <span className="px-3 py-1 text-md md:text-lg font-bold text-[#7443DE] mr-2 mb-2 flex items-center justify-center">
            Hari Prasad
            <img src="./images/link.png" alt="img" className='ml-2'/> 
            </span>
            <div className="font-bold text-md mb-2 text-[#061357]"> UI UX Designer </div>
          
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden shadow-lg w-[95%] sm:w-[80%] md:w-full mx-auto border-2">
          <img className="mt-10 mb-5 mx-auto" src="./images/2.png" alt="img" />
          <div className="px-6 py-4 text-center">
            <p className="text-[#061357] font-semibold text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim volutpat, urna auctor..
            </p>
          </div>
          <div className="px-2 pt-3 pb-5 text-center">
          <span className="px-3 py-1 text-md md:text-lg font-bold text-[#7443DE] mr-2 mb-2 flex items-center justify-center">
            Hari Prasad
            <img src="./images/link.png" alt="img" className='ml-2'/> 
            </span>
            <div className="font-bold text-md mb-2 text-[#061357]"> UI UX Designer</div>
         
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden shadow-lg w-[95%] sm:w-[80%] md:w-full mx-auto  border-2">
          <img className="mt-10 mb-5 mx-auto" src="./images/2.png" alt="img" />
          <div className="px-6 py-4 text-center">
            <p className="text-[#061357] font-semibold text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim volutpat, urna auctor..
            </p>
          </div>
          <div className="px-2 pt-3 pb-5 text-center">
            <span className="px-3 py-1 text-md md:text-lg font-bold text-[#7443DE] mr-2 mb-2 flex items-center justify-center">
            Hari Prasad
            <img src="./images/link.png" alt="img" className='ml-2'/> 
            </span>
            <div className="font-bold text-md mb-2 text-[#061357]"> UI UX Designer </div>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-md mb-2 text-[#061357] text-center mt-10 hover:cursor-pointer"> View More </h3>
    </div>
  )
}

export default HallOfFame