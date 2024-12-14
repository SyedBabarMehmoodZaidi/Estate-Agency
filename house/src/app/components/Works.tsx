import Image from 'next/image'
import React from 'react'
import Clock from '/public/Images/clock.png'
import LevelBar from '/public/Images/levelbar.jpg'
import Heart from '/public/Images/heart.png'
import InSide2 from '/public/Images/inside 2.jpg'
import OutSide1 from '/public/Images/outside1.jpg'
import HouseOutSide5 from '/public/Images/houseoutside5.jpg'
import Houseoutside6 from '/public/Images/houseoutside6.png'


const Works = () => {
  return (
    <div>
      
      <div className="flex flex-col justify-center items-center text-center mt-44">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[40px] flex items-center text-[#252B42]">How It Work</h1>
      <p className="font-normal text-[14px] text-[#252B42] mt-2">
      If you've owned property, or it's your first time, and you're ready to submit an offer <br /> 
      or think about it in the next year or two, contact me now.
      </p>
    </div>
    </div>

    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 lg:gap-24 mt-8 lg:mt-32 p-4">
  <div className="border border-black rounded-[5px] w-full lg:w-[250px] h-[128px] flex flex-col justify-center items-center hover:bg-blue-950 font-bold text-white bg-slate-500 p-4">
    <Image src={Clock} alt="clockicon" width={52} height={52} />
    <span className="mt-4 text-center">Make an appointment</span>
  </div>

  <div className="border border-black rounded-[5px] w-full lg:w-[250px] h-[128px] flex flex-col justify-center items-center hover:bg-blue-950 font-bold text-white bg-slate-500 p-4">
    <Image src={LevelBar} alt="levelbar" width={52} height={32} />
    <span className="mt-4 text-center">Evaluate the property</span>
  </div>

  <div className="border border-black rounded-[5px] w-full lg:w-[250px] h-[128px] flex flex-col justify-center items-center hover:bg-blue-950 font-bold text-white bg-slate-500 p-4">
    <Image src={Heart} alt="heart" width={52} height={32} />
    <span className="mt-4 text-center">Close the deal. Enjoy!</span>
  </div>
</div>


<div>
  <div className="h-auto lg:h-screen bg-orange-300 flex flex-col lg:flex-row items-center lg:mt-40">
    {/* Right Side Image Grid */}
    <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Image src={Houseoutside6} alt="houseoutside1" width={240} height={700} />
        </div>
        <div>
          <Image src={InSide2} alt="houseinside2" width={240} height={700} />
        </div>
        <div>
          <Image src={OutSide1} alt="houseoutside2" width={240} height={700} />
        </div>
        <div>
          <Image src={HouseOutSide5} alt="houseoutside3" width={240} height={700} objectFit="cover"/>
        </div>
      </div>
    </div>

    {/* Left Side Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start p-6 lg:mt-28 lg:pl-[176px] gap-4">
      {/* Heading */}
      <h1 className="text-center lg:text-left max-w-[376px] font-bold text-[28px] text-[#252B42]">
        I will help you in every way possible to locate your next residence.
      </h1>

      {/* Paragraph */}
      <p className="text-center lg:text-left max-w-[376px] text-[20px] font-normal text-[#252B42]">
        Since 2019, I have assisted over 1500 customers in saving over $85 million on their real estate transactions.
        I provide customers with a personalized experience for selling, purchasing, and renting properties, as well as
        assistance in obtaining a home loan, with complete transparency and flawless service.
      </p>

      {/* Button */}
      <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md text-white">
        CONTACT ME
      </button>

      {/* Contact Information */}
      <p className="font-bold text-[#252B42] mt-4 text-center lg:text-left">Phone: +92 308 273 5132</p>
      <p className="font-bold text-[#252B42] text-center lg:text-left">Fax: + 451 215 215</p>
    </div>
  </div>
</div>


    </div>
  )
}

export default Works
