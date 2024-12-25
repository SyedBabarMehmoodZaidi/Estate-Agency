import Image from 'next/image'
import React from 'react'
import Instagram from '/public/Images/instagram.png'
import FacebookLogo from '/public/Images/logos_facebook.png'
import TwitterLogo from '/public/Images/logos_twitter.png'
import InstagramLogo from '/public/Images/logos_instagram.png'
import LinkedinLogo from '/public/Images/logos_linkedin.png'
import h1 from '/public/Images/h1.jpg'
import h2 from '/public/Images/h2.jpg'
import h3 from '/public/Images/h3.jpg'
import h4 from '/public/Images/h4.jpg'
import h5 from '/public/Images/h5.jpg'
import h6 from '/public/Images/h6.jpg'
import h7 from '/public/Images/h7.jpg'
import h8 from '/public/Images/h8.jpg'
import { GiHouse } from "react-icons/gi";


const Footer = () => {
  return (
    <div>

    <div className="flex justify-center items-center h-auto bg-slate-600">
    <div className="flex flex-col sm:flex-row justify-between items-center w-[90%] sm:w-[80%] gap-8">
      {/* Left Side: Heading and Paragraph */}
      <div className="flex flex-col items-start gap-4 m-16 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Stay Updated
        </h1>
        <p className="text-lg">
          Subscribe to our newsletter and never miss the latest updates.
        </p>
      </div>
  
      {/* Right Side: Input and Button */}
      <div className="flex items-center gap-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-[250px] px-4 py-2 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-2 text-white bg-blue-950 rounded-md transition-all duration-300 hover:bg-red-600">
          SUBSCRIBE
        </button>
      </div>
    </div>
  </div>
  
  <div className='flex justify-center items-center gap-4 mt-24'>
    <Image src={Instagram} alt='instagramlogo' width={52} height={52}/>
    <h1 className='font-bold text-[20px] text-blue-950 hover:text-red-600'>Follow us on Instagram</h1>
  </div>


  <div className='flex flex-wrap justify-center items-center mt-10'>
    <Image src={h1}alt='img' width={140} height={200} className="hover:shadow-xl hover:scale-[1.05] transition duration-300"/>
    <Image src={h2} alt='img' width={140} height={200} className="hover:shadow-xl hover:scale-[1.05] transition duration-300"/>
    <Image src={h3} alt='img' width={140} height={200} className="hover:shadow-xl hover:scale-[1.05] transition duration-300"/>
    <Image src={h4} alt='img' width={140} height={200} className="hover:shadow-xl hover:scale-[1.05] transition duration-300"/>
    <Image src={h5} alt='img' width={140} height={200} className="hover:shadow-xl hover:scale-[1.05] transition duration-300"/>
    <Image src={h6} alt='img' width={140} height={200} className="hover:shadow-xl hover:scale-[1.05] transition duration-300"/>
    <Image src={h7} alt='img' width={140} height={200} className="hover:shadow-xl hover:scale-[1.05] transition duration-300"/>
    <Image src={h8} alt='img' width={140} height={200} className="hover:shadow-xl hover:scale-[1.05] transition duration-300"/>
  </div>

   <div>
         <div className="flex justify-center items-center gap-40 space-x-1 mt-10">
   
   <div className='flex justify-center items-center gap-4'>
   <div className="text-[20px] sm:text-[30px] text-red-600">
       <GiHouse />
   </div>
   
   <h1 className="text-[20px] sm:text-[30px] font-bold text-black whitespace-nowrap">Apna Ghar</h1>
   </div>

   <div className='justify-center items-center gap-8 lg:flex hidden'>
  <p className="font-bold text-[#252B42] mt-4 text-center lg:text-left">Phone: +92 308 273 5132</p>
  <p className="font-bold text-[#252B42] text-center lg:text-left">Fax: + 451 215 215</p>
</div>

<div className='justify-center items-center gap-4 lg:flex hidden'>
  <Image src={FacebookLogo} alt='facebooklogo' width={42} height={42} />
  <Image src={TwitterLogo} alt='twitterlogo' width={42} height={42} />
  <Image src={InstagramLogo} alt='instagramlogo' width={42} height={42} />
  <Image src={LinkedinLogo} alt='linkedinlogo' width={42} height={42} />
</div>


   </div>
   </div>

   <div className="w-full border-b border-gray-500 mt-10">
   </div>

   <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-gray-600 mt-4">
  {/* Left side - Terms & Conditions and Privacy Policy */}
  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
    <div className="flex items-center gap-2">
      <span className="text-xl">{'>'}</span>
      <span className="font-semibold">Terms & Conditions</span>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-xl">{'>'}</span>
      <span className="font-semibold">Privacy Policy</span>
    </div>
  </div>

  {/* Right side - Copyright */}
  <div className="text-sm text-center lg:text-left">
    <span>@ 2025 Apna Ghar. All rights reserved.</span>
  </div>
</div>



  </div>
  )
}

export default Footer
