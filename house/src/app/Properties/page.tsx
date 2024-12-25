import React from 'react'
import Banner from '/public/Images/banner2.jpg'
import Image from 'next/image'
import House1 from '/public/Images/p1.jpg'
import House2 from '/public/Images/p2.jpg'
import House3 from '/public/Images/p3.jpg'
import House4 from '/public/Images/p4.jpg'
import House5 from '/public/Images/p5.jpg'
import House6 from '/public/Images/p6.jpg'
import House7 from '/public/Images/p7.jpeg'
import House8 from '/public/Images/p8.jpg'
import Location from '/public/Images/location.png' 
import Bamsi from '/public/Images/bamsi.jpg'

const page = () => {
  return (
    <div>
    <div className="relative w-full ">
      <Image src={Banner} alt="banner" layout="responsive" width={100} height={50} objectFit="cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-bold text-6xl text-white">Properties</h1>
        <p className="font-bold text-2xl text-yellow-100">Find your dream homes with me.</p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10">
  {/* Left column */}
  <div className="text-center lg:text-left space-y-10">
    <h1 className='font-bold text-[32px]'>Creating Opportunities. Building <br />
     Your Future.</h1>
    <p className='text-gray-500 text-[14px]'>
      Browse for the perfect place to live by looking through listings, <br />
     areas, neighborhoods, and insider tips provided by residents. <br /> I 
      assist my customers in getting to the heart of their real estate <br />
       demands, desires, and outcomes. I&apos;m in this for the long term.
    </p>
  </div>

  {/* Right column - statistics */}
  <div className="flex gap-8 justify-center items-center">
    <div className='border border-gray-300 p-24 text-center hover:shadow-xl hover:scale-[1.05] transition duration-300'>
      <h1 className='font-bold text-[24px] text-blue-950'>5+</h1>
      <p className='text-gray-500 text-[14px]'>Years of Experience</p>
    </div>

    <div className='border border-gray-300 p-24 text-center hover:shadow-xl hover:scale-[1.05] transition duration-300'>
      <h1 className='font-bold text-[24px] text-blue-950'>1,000+</h1>
      <p className='text-gray-500 text-[14px]'>Satisfied Clients</p>
    </div>
  </div>
</div>


<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="flex hover:shadow-xl hover:scale-[1.05] transition duration-300">
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 bg-blue-950 hover:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
          For Sale
        </div>
        <Image src={House1} alt="houseimage" width={240} height={242} className="w-full" />
      </div>
      <div className="ml-4 w-1/2 flex flex-col justify-center">
        <p className="flex items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          Defence Phase 8, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Bamsi Place</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">$200,000</p>
        <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400">
          <span className="text-gray-500">View Listing</span>
        </button>
      </div>
    </div>

    <div className="flex hover:shadow-xl hover:scale-[1.05] transition duration-300">
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 bg-blue-950 hover:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
          For Sale
        </div>
        <Image src={House2} alt="houseimage" width={240} height={242} className="w-full" />
      </div>
      <div className="ml-4 w-1/2 flex flex-col justify-center">
        <p className="flex items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          Gulshane-e-Iqbal, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Saima Villas</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">$170,000</p>
        <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400">
          <span className="text-gray-500">View Listing</span>
        </button>
      </div>
    </div>

    <div className="flex hover:shadow-xl hover:scale-[1.05] transition duration-300">
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 bg-blue-950 hover:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
          For Rent
        </div>
        <Image src={House3} alt="houseimage" width={240} height={242} className="w-full" />
      </div>
      <div className="ml-4 w-1/2 flex flex-col justify-center">
        <p className="flex items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          North Nazimabad, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Burj-ul-Ameen</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">$9,000</p>
        <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400">
          <span className="text-gray-500">View Listing</span>
        </button>
      </div>
    </div>

    <div className="flex hover:shadow-xl hover:scale-[1.05] transition duration-300">
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 bg-blue-950 hover:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
          For Rent
        </div>
        <Image src={House4} alt="houseimage" width={240} height={242} className="w-full" />
      </div>
      <div className="ml-4 w-1/2 flex flex-col justify-center">
        <p className="flex items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          Saddar, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Sky House</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">$10,000</p>
        <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400">
          <span className="text-gray-500">View Listing</span>
        </button>
      </div>
    </div>

    <div className="flex hover:shadow-xl hover:scale-[1.05] transition duration-300">
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 bg-blue-950 hover:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
          For Sale
        </div>
        <Image src={House5} alt="houseimage" width={240} height={242} className="w-full" />
      </div>
      <div className="ml-4 w-1/2 flex flex-col justify-center">
        <p className="flex items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          Gulistan-e-Johar, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Al-Rauf</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">$180,000</p>
        <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400">
          <span className="text-gray-500">View Listing</span>
        </button>
      </div>
    </div>

    <div className="flex hover:shadow-xl hover:scale-[1.05] transition duration-300">
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 bg-blue-950 hover:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
          For Rent
        </div>
        <Image src={House6} alt="houseimage" width={240} height={242} className="w-full" />
      </div>
      <div className="ml-4 w-1/2 flex flex-col justify-center">
        <p className="flex items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          BufferZone, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Babar Villa</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">$9,000</p>
        <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400">
          <span className="text-gray-500">View Listing</span>
        </button>
      </div>
    </div>

    <div className="flex hover:shadow-xl hover:scale-[1.05] transition duration-300">
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 bg-blue-950 hover:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
          For Rent
        </div>
        <Image src={House7} alt="houseimage" width={240} height={242} className="w-full" />
      </div>
      <div className="ml-4 w-1/2 flex flex-col justify-center">
        <p className="flex items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          North karachi Sector 8, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]"> Safa Residency</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">$8,000</p>
        <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400">
          <span className="text-gray-500">View Listing</span>
        </button>
      </div>
    </div>

    <div className="flex hover:shadow-xl hover:scale-[1.05] transition duration-300">
      <div className="relative w-1/2">
        <div className="absolute top-0 left-0 bg-blue-950 hover:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
          For Sale
        </div>
        <Image src={House8} alt="houseimage" width={240} height={242} className="w-full" />
      </div>
      <div className="ml-4 w-1/2 flex flex-col justify-center">
        <p className="flex items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          Liaquatabad, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Al-Ghafoor</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">$190,000</p>
        <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400">
          <span className="text-gray-500">View Listing</span>
        </button>
      </div>
    </div>

  </div>
</div>


<div>
  <div className="h-screen mt-40 bg-orange-300 flex flex-col-reverse lg:flex-row items-center">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start  lg:mt-28 px-8 lg:pl-[176px] gap-4">
      {/* Heading */}
      <h1 className="max-w-[376px] font-bold text-[28px] text-[#252B42]">
      I will help you find the property of your dreams.
      </h1>

      {/* Paragraph */}
      <p className="max-w-[376px] text-[20px] font-normal text-[#252B42]">
      The only name you need to know for real estate answers: <span className='font-extrabold'> Babar Bamsi </span>
      </p>

      {/* Button */}
      <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md text-white">
        CONTACT ME
      </button>

      {/* Contact Information */}
      <p className="font-bold text-[#252B42] mt-4">Phone: +92 308 273 5132</p>
      <p className="font-bold text-[#252B42]">Fax: + 451 215 215</p>
    </div>

    {/* Image */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <Image src={Bamsi} alt="Image description" width={450} height={900} />
    </div>
  </div>
</div>
    
  </div>
  
  )
}

export default page
