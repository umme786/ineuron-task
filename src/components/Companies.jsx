import React from 'react'

const Companies = () => {
  return (
    <div className='hidden lg:block bg-white p-10'>
        <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#061357] my-16'> Recruiting Companies </h2>
        <div className='flex w-[80%] lg:w-[90%] mx-auto justify-between mb-10 mt-20'>
            <img src="./images/mic.png" alt="png" className='h-[50px]'/>
            <img src="./images/adobe.png" alt="png" className='h-[40px]'/>
            <img src="./images/del.png" alt="png" className='h-[30px]'/>
            <img src="./images/acc.png" alt="png" className='h-[40px]'/>
            <img src="./images/kpmg.png" alt="png" className='h-[40px]'/>
            <img src="./images/acc.png" alt="png" className='h-[40px]'/>
        </div>
    </div>
  )
}

export default Companies