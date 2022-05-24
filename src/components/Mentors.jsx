import React from 'react'

const Mentors = () => {
  return (
    <div className='mb-20'>
      <h2 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#061357] my-16 lg:my-20'> Our Mentors </h2>
        {/* <div className="border-2 gap-2 grid grid-cols-1 md:grid-cols-5 w-full lg:w-[90%] mx-auto">
            <div className="border-2"> <img src="./images/1m.png" alt="img" className='w-full' /></div>
            <div className="border-2"> <img src="./images/2m.png" alt="img" className='w-full' /> <h2 className=''> Krish Naik </h2></div>
            <div className="border-2"> <img src="./images/3m.png" alt="img" className='w-full' /></div>
            <div className="border-2"> <img src="./images/4.png" alt="img" className='w-full' /></div>
            <div className="border-2"> <img src="./images/5.png" alt="img" className='w-full' /></div>
            </div>
        <div className="border-2 gap-2 grid grid-cols-1 md:grid-cols-6 w-full lg:w-[90%] mx-auto">
            <div className="border-2"> <img src="./images/6.png" alt="img" className='w-full' /> </div>
            <div className="border-2"> <img src="./images/7.png" alt="img" className='w-full' /> </div>
            <div className="border-2"> <img src="./images/8.png" alt="img" className='w-full' /> </div>
            <div className="border-2"> <img src="./images/9.png" alt="img" className='w-full' /> </div>
            <div className="border-2"> <img src="./images/10.png" alt="img" className='w-fu' /> </div>
            <div className="border-2"> <img src="./images/11.png" alt="img" className='w-full' /> </div>
        </div>
        <div className="border-2 gap-2 grid grid-cols-1 md:grid-cols-5 w-full lg:w-[90%] mx-auto">
            <div className="border-2"> <img src="./images/6+.png" alt="img" className='w-full' /> </div>
        </div> */}

            <div className="hidden md:flex w-[50%] md:w-[85%] mx-auto">            
                    <div className="block ">
                        <div className="mr-2 ml-2 mb-4"> <img src="./images/1m.png" alt="img" className='w-full' /> </div>
                        <div className="mr-2 ml-2 mb-4"> <img src="./images/6.png" alt="img" className='w-full' /> </div>
                        <div className="mr-2 ml-2 mb-4"> <img src="./images/6+.png" alt="img" className='w-full' /> </div>
                    </div>
                
            {/* ----------------------for desktop----------------------- */}
                <div className="block md:flex">
                    <div className="">
                        <div className="mr-2 ml-2 mb-4 relative"> <img src="./images/2m.png" alt="img" className='w-full' />
                            <div className='items-center absolute bottom-0 bg-[#7443DE] justify-between flex w-full p-1 lg:p-2 hover:cursor-pointer'> 
                            <h2 className='text-white text-sm md:text-[13px] lg:text-sm'> Krish Naik </h2> 
                                <div className='flex'> 
                                    <img src="./images/linkl.png" alt="img" className='px-1' /> 
                                    <img src="./images/linky.png" alt="img" className='px-1' /> 
                                </div>
                            </div>
                        </div>
                        <div className="mr-2 ml-2 mb-4"> <img src="./images/7.png" alt="img" className='w-full' /> </div>
                    </div>
                    <div className="">
                        <div className="mr-2 ml-2 mb-4"> <img src="./images/3m.png" alt="img" className='w-full' /> </div>
                        <div className="mr-2 ml-2 mb-4"> <img src="./images/8.png" alt="img" className='w-full' /> </div>
                    </div>
                    <div className="">
                        <div className="mr-2 ml-2 mb-4"> <img src="./images/4.png" alt="img" className='w-full' /> </div>
                        <div className="mr-2 ml-2 flex"> 
                            <div className='h-full w-[80%]'> <img src="./images/9.png" alt="img" className="" /> </div> 
                            <div className='h-full w-[24%] xl:w-[23%]'> <img src="./images/10.png" alt="img" className='' />  </div>
                        </div>
                    </div>
                </div>

                <div className="block">
                        <div className="mr-2 ml-2 mb-4"> <img src="./images/5.png" alt="img" className='w-full' /> </div>
                        <div className="mr-2 ml-2 mb-4"> <img src="./images/11.png" alt="img" className='w-full' /> </div>
                </div>
                {/* border-2 border-green-500 */}
            </div>

            {/* ----------------------for mobile------------------------ */}

            <div className="block md:hidden mx-auto">            
                   <div className="flex justify-between mb-4">
                          <img src="./images/mobile1.png" alt="img" className='w-[80%]'/>
                          <img src="./images/mobileLB.png" alt="img" className='w-[17%]'/>                
                   </div>
                   <div className="flex justify-between mb-4">
                          <img src="./images/mobileO.png" alt="img" className='w-[17%]'/>
                          <img src="./images/mobile2.png" alt="img" className='w-[80%]' />
                   </div>
                   <div className="flex justify-between mb-4">
                          <img src="./images/mobile3.png" alt="img" className='w-[80%]'/>
                          <img src="./images/mobileBR.png" alt="img" className='w-[17%]'/>
                    </div>
                    <div className="flex justify-between mb-4">
                          <img src="./images/mobileB.png" alt="img" className='w-[17%]' />
                          <img src="./images/mobile4.png" alt="img" className='w-[80%]' />
                    </div>

                    <div className="mb-4">
                          <img src="./images/mobile5.png" alt="img" className='w-full' />
                    </div> 
                     <div className="flex justify-between mb-4">
                          <img src="./images/mobile6.png" alt="img" className='w-[80%]' />
                          <img src="./images/mobilesP.png" alt="img" className='w-[17%]'/>
                    </div> 
                     <div className="mb-4">
                          <img src="./images/mobile7.png" alt="img" className='w-full' />
                    </div>
                    <div className="flex justify-between mb-4">
                          <img src="./images/mobileB.png" alt="img" className='w-[17%]'/>
                          <img src="./images/mobile4.png" alt="img" className='w-[80%]'/>
                    </div> 
                    <div className="flex justify-between mb-4">
                          <img src="./images/mobile6.png" alt="img" className='w-[48.5%]'/>
                          <img src="./images/mobile6.png" alt="img" className='w-[48.5%]'/>
                    </div> 

            </div>

       {/* border-2 border-green-500 */}

            <h3 className='text-center text-xl font-bold font-heading text-[#061357] my-10 '> View all mentors </h3>
       </div>
 
  )
}

export default Mentors