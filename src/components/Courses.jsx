import React from "react";

const Courses = () => {
  return (
    <div className="">
      <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#061357] my-16 lg:my-20'> Popular Community Courses </h2>
      <div className="px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-full lg:w-[90%] mx-auto">
        <div className="bg-white rounded overflow-hidden shadow-lg w-[95%] sm:w-[80%] md:w-full mx-auto border-2 border-[#554EC0]">
          <img className="w-[90%] my-10 mx-auto" src="./images/card.png" alt="img" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#061357]"> Email Marketing with 3 months Internship </div>
            <p className="text-[#63676A] text-base">
            Sudhanshu Kumar
            </p>
          </div>
          <div className="px-2 pt-4 pb-2">
            <span className="inline-block px-3 py-1 text-sm font-bold text-[#7443DE] mr-2 mb-2">
            ₹10,000
            </span>
          
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden shadow-lg w-[95%] sm:w-[80%] md:w-full mx-auto border-2 border-[#554EC0]">
          <img className="w-[90%] my-10 mx-auto" src="./images/card.png" alt="img" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#061357]"> Email Marketing with 3 months Internship </div>
            <p className="text-[#63676A] text-base">
            Sudhanshu Kumar
            </p>
          </div>
          <div className="px-2 pt-4 pb-2">
            <span className="inline-block px-3 py-1 text-sm font-bold text-[#7443DE] mr-2 mb-2">
            ₹10,000
            </span>
         
          </div>
        </div>

        <div className="bg-white rounded overflow-hidden shadow-lg w-[95%] sm:w-[80%] md:w-full mx-auto  border-2 border-[#554EC0]">
          <img className="w-[90%] my-10 mx-auto" src="./images/card.png" alt="img" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-[#061357]"> Email Marketing with 3 months Internship </div>
            <p className="text-[#63676A] text-base">
            Sudhanshu Kumar
            </p>
          </div>
          <div className="px-2 pt-4 pb-2">
            <span className="inline-block px-3 py-1 text-sm font-bold text-[#7443DE] mr-2 mb-2">
            ₹10,000
            </span>
           
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Courses;
