import Image from 'next/image'
import React from 'react'
import CommunityHall from '/public/Images/communityhall.jpg'
import Gym from '/public/Images/gym.jpg'
import SunSet from '/public/Images/sunset.jpg'
import PlayArea from '/public/Images/playarea.jpg'


const Popular = () => {
  return (
    <div>
    
      <div className="flex flex-col justify-center items-center text-center mt-28">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[40px] flex items-center text-[#252B42]">Popular Neighborhoods</h1>
      <p className="font-normal text-[14px] text-[#252B42] mt-2">
      I assist my customers in identifying their fundamental <br /> 
      goals for buying or selling property, and I attentively <br />
       handle the process from beginning to end.
      </p>
    </div>
    </div>

    
    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center h-auto lg:h-screen bg-gray-100 gap-8 p-4">
  {/* 1st Column */}
  <div className="flex flex-col items-center space-y-4 w-full lg:w-auto">
    <div className="relative w-full lg:w-[240px] h-[300px]"  style={{ boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5)' }}>
      <Image src={CommunityHall} alt="communityhall" layout="fill" objectFit="cover"  />
      <span className="absolute inset-0 flex justify-center items-center text-white text-xl font-extrabold">
        Community Hall
      </span>
    </div>
    <div className="relative w-full lg:w-[240px] h-[300px]" style={{ boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5)' }}>
      <Image src={Gym} alt="gym" layout="fill" objectFit="cover" />
      <span className="absolute inset-0 flex justify-center items-center text-white text-xl font-extrabold">
        Gym
      </span>
    </div>
  </div>

  {/* 2nd Column */}
  <div className="flex justify-center items-center w-full lg:w-auto">
    <div className="relative w-full lg:w-[300px] h-[600px]" style={{ boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5)' }}>
      <Image src={SunSet} alt="sunset" layout="fill" objectFit="cover" />
      <span className="absolute inset-0 flex justify-center items-center text-white text-2xl font-extrabold">
        Sun Set
      </span>
    </div>
  </div>

  {/* 3rd Column */}
  <div className="flex flex-col items-center space-y-4 w-full lg:w-auto">
  <div className="relative w-full lg:w-[240px] h-[300px]" style={{ boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5)' }}>
  <Image 
    src="/Images/swimmingpool.jpg" alt="Swimming Pool" layout="fill" objectFit="cover"/>
  <span className="absolute inset-0 flex justify-center items-center text-white text-xl font-extrabold">
    Swimming Pool
  </span>
</div>
    <div className="relative w-full lg:w-[240px] h-[300px]" style={{ boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5)' }}>
      <Image src={PlayArea} alt="playarea" layout="fill" objectFit="cover" />
      <span className="absolute inset-0 flex justify-center items-center text-white text-xl font-extrabold">
        Play Area
      </span>
    </div>
  </div>
</div>


    </div>
  )
}

export default Popular
