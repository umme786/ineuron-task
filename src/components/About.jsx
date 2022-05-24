import React from 'react'

const About = () => {
  return (
 <div className='bg-white'>
    {/* <div className='w-[80%] mx-auto font-montserrat text-justify'> */}
    <div className='container mx-auto font-montserrat px-10 py-10 mb-10'>        
    <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#061357] my-10 font-inter'> About Ineuron </h2>

    <ul className='pl-2 sm:pl-7 text-justify'>
      <li className='text-xl sm:text-3xl font-bold text-[#061357] my-5 list-disc font-inter'> Our Vision <br />
      <span className='py-2 font-semibold text-sm sm:text-base text-[#63676A] font-montserrat'> Our vision is to bridge the gap between career expectations and reality via innovative teaching approaches </span>
      </li>
      <li className='text-xl sm:text-3xl font-bold text-[#061357] my-5 list-disc font-inter'> Teaching By Experts <br />
      <span className='py-2 font-semibold text-sm sm:text-base text-[#63676A] font-montserrat'> Industry experts in data science, machine learning, and deep learning with multiple years of corporate as well as teaching experience. </span>
      </li>
      <li className='text-xl sm:text-3xl font-bold text-[#061357] my-5 list-disc font-inter'> Product Development <br />
      <span className='py-2 font-semibold text-sm sm:text-base text-[#63676A] font-montserrat'> We are also into product development for the domestic as well as the international market with more than 50+ projects in hand and many more successfully delivered </span>
      </li>
    </ul>

    <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 container mx-auto text-justify">
        <div className="bg-[#061357] overflow-hidden shadow-lg md:w-full mx-auto border-2 px-2 sm:px-6 py-10 rounded-md">
          <div className="px-2 sm:px-6 py-4">
          <div className="pb-4">
            <div className="font-bold text-md mb-2 text-white text-2xl font-inter"> Our Story </div>  
          </div>
            <p className="text-white font-normal text-sm sm:text-base font-montserrat">
            Industry experts in data science, machine learning, and deep learning with multiple years of corporate as well as teaching experience.
            </p>
          </div>
        </div>

        <div className="bg-[#061357] overflow-hidden shadow-lg md:w-full mx-auto border-2 px-2 sm:px-6 py-10 rounded-md">
          <div className="px-2 sm:px-6 py-4">
          <div className="pb-4">
            <div className="font-bold text-md mb-2 text-white text-2xl font-inter"> Who We Are </div>  
            </div>
            <p className="text-white font-normal text-sm sm:text-base font-montserrat">
            Our vision is to bridge the gap between career expectations and reality via innovative teaching approaches
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 grid grid-cols-1 gap-5 container mx-auto text-justify">
        <div className="bg-[#061357] overflow-hidden shadow-lg md:w-full mx-auto border-2 px-2 sm:px-6 pb-10 rounded-md">
          <div className="px-6 py-4">
          <div className="">
            <div className="font-bold text-md text-white text-2xl font-inter"> <img src="./images/mission.png" alt="img" className='mx-auto'/> </div>  
          </div>
            <p className="text-white font-normal text-sm sm:text-base font-montserrat">
            Our mission is to provide quality education throughout all sets of the economy which is why we did not want the price to be a factor for which individuals would hesitate in attaining education in the respective domains.We believe in growing together which is why we also have our learning community where students can raise discussion related to technical questions and find the solutions to their problems.
            </p>
          </div>
        </div>
      </div>

</div>
    </div>
  )
}

export default About