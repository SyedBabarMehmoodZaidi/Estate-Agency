import Image from 'next/image'
import React from 'react'
import ServiceBanner from '/public/Images/servicebanner1.jpg'
import BuyProperty from '/public/Images/buyproperty.jpg'
import BuyProperty2 from '/public/Images/buyproperty2.jpg'
import BuyProperty3 from '/public/Images/buyproperty3.jpg'
import BuyProperty4 from '/public/Images/buyproperty4.jpg'
import King from '/public/Images/king.png'
import Follower from '/public/Images/follower.png'
import Map from '/public/Images/map.jpg'
import Star from '/public/Images/star.jpg'
import Bamsi from '/public/Images/bamsi.jpg'

const page = () => {
  return (
    <div>
      <div className="relative w-full">
      <Image src={ServiceBanner} alt="banner" layout="responsive" width={100} height={50} objectFit="cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-bold text-6xl text-white">Services</h1>
        <p className="font-bold text-2xl text-yellow-100">The only realtor you will ever want.</p>
      </div>
    </div>

    <div>
  <div className="h-screen mt-1 bg-orange-300 flex flex-col-reverse lg:flex-row items-center">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start  lg:mt-28 px-8 lg:pl-[176px] gap-4">
      {/* Heading */}
      <h1 className="max-w-[376px] font-bold text-[28px] text-[#252B42]">
      Buy Property
      </h1>

      {/* Paragraph */}
      <p className="max-w-[376px] text-[20px] font-normal text-[#252B42]">
      Explore premium properties at the best locations with modern amenities and flexible pricing options. Your dream property is just a step away!
      </p>

      <ul>
        <li><span className='font-bold'>Prime Locations:</span> Find properties in the most sought-after areas.</li>
        <li><span className='font-bold'>Modern Amenities:</span> Enjoy state-of-the-art facilities for a comfortable lifestyle.</li>
        <li><span className='font-bold'>Flexible Pricing:</span> Affordable options to suit your budget.</li>
        <li><span className='font-bold'>Secure Investment:</span> Reliable and trusted property deals for peace of mind.</li>
      </ul>

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
    <div className="absolute top-0 left-0 bg-blue-950 hover:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10 ">
          For Sale
        </div>
      <Image src={BuyProperty} alt="Image description" width={700} height={900} />
    </div>
  </div>
</div> 
 

 <div>
  <div className="h-screen mt-1 bg-orange-300 flex flex-col-reverse lg:flex-row items-center">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start  lg:mt-28 px-8 lg:pl-[176px] gap-4">
      {/* Heading */}
      <h1 className="max-w-[376px] font-bold text-[28px] text-[#252B42]">
      Sell Property
      </h1>

      {/* Paragraph */}
      <p className="max-w-[376px] text-[20px] font-normal text-[#252B42]">
      Sell your property quickly and easily with our trusted platform. Get the best value, secure transactions, and expert guidance every step of the way!
      </p>

      <ul>
        <li><span className='font-bold'>Top Value:</span>  Get the best market price for your property</li>
        <li><span className='font-bold'>Quick Deals:</span> Sell your property faster with trusted buyers.</li>
        <li><span className='font-bold'>Expert Support:</span>  Professional guidance for a hassle-free process.</li>
        <li><span className='font-bold'>Secure Transactions:</span> Safe and reliable property selling experience.</li>
      </ul>

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
      <Image src={BuyProperty2} alt="Image description" width={700} height={900} />
    </div>
  </div>
</div>

<div>
  <div className="h-screen mt-1 bg-orange-300 flex flex-col-reverse lg:flex-row items-center">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start  lg:mt-28 px-8 lg:pl-[176px] gap-4">
      {/* Heading */}
      <h1 className="max-w-[376px] font-bold text-[28px] text-[#252B42]">
      Rent Property
      </h1>

      {/* Paragraph */}
      <p className="max-w-[376px] text-[20px] font-normal text-[#252B42]">
      Rent your property with ease through our reliable platform. Connect with trusted tenants, ensure secure agreements, and maximize your rental income!
      </p>

      <ul>
        <li><span className='font-bold'>Trusted Tenants:</span>Connect with verified and reliable renters.</li>
        <li><span className='font-bold'>Quick Listings:</span>List your property and find tenants fast.</li>
        <li><span className='font-bold'>Maximized Income:</span> Get the best rental value for your property.</li>
        <li><span className='font-bold'>Secure Agreements:</span> Hassle-free and legally secure rental contracts.</li>
      </ul>

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
      <Image src={BuyProperty3} alt="Image description" width={700} height={900} />
    </div>
  </div>
</div>


<div>
  <div className="h-screen mt-1 bg-orange-300 flex flex-col-reverse lg:flex-row items-center">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start  lg:mt-28 px-8 lg:pl-[176px] gap-4">
      {/* Heading */}
      <h1 className="max-w-[376px] font-bold text-[28px] text-[#252B42]">
      Home Loan
      </h1>

      {/* Paragraph */}
      <p className="max-w-[376px] text-[20px] font-normal text-[#252B42]">
      Fulfill your dream of owning a home with our easy and flexible home loan solutions. Enjoy low interest rates, quick approvals, and expert assistance!
      </p>

      <ul>
        <li><span className='font-bold'>Low Interest Rates:</span> Affordable loans with competitive rates.</li>
        <li><span className='font-bold'>Flexible Tenure: </span> Choose repayment options that suit your budget.</li>
        <li><span className='font-bold'>Quick Approvals:</span>  Fast and hassle-free loan processing.</li>
        <li><span className='font-bold'>Expert Guidance:</span>  Personalized support throughout the loan journey.</li>
      </ul>

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
    
      <Image src={BuyProperty4} alt="Image description" width={700} height={900} />
    </div>
  </div>
</div>


<div>
     <div className="w-full h-auto bg-slate-600 py-5 ">
  <div className="flex flex-wrap justify-center items-center gap-4 m-4">
    {/* Box 1 */}
    <div className="w-[90%] sm:w-[300px] h-[150px] flex flex-col justify-center items-center gap-6 bg-slate-500 text-white hover:bg-blue-950 hover:text-white p-6 sm:p-14">
      <Image src={King} alt="king" width={72} height={72} />
      <h1 className="font-bold text-[16px]">5+ Years of Experience</h1>
    </div>

    {/* Box 2 */}
    <div className="w-[90%] sm:w-[300px] h-[150px] flex flex-col justify-center items-center gap-6 bg-slate-500 text-white hover:bg-blue-950 hover:text-white p-6 sm:p-14">
      <Image src={Follower} alt="follower" width={72} height={72} />
      <h1 className="font-bold text-[16px]">1000+ Satisfied Clients</h1>
    </div>

    {/* Box 3 */}
    <div className="w-[90%] sm:w-[300px] h-[150px] flex flex-col justify-center items-center gap-6 bg-slate-500 text-white hover:bg-blue-950 hover:text-white p-6 sm:p-14">
      <Image src={Map} alt="map" width={72} height={72} />
      <h1 className="font-bold text-[16px]">24 Locations Covered</h1>
    </div>

    {/* Box 4 */}
    <div className="w-[90%] sm:w-[300px] h-[150px] flex flex-col justify-center items-center gap-6 bg-slate-500 text-white hover:bg-blue-950 hover:text-white p-6 sm:p-14">
      <Image src={Star} alt="star" width={72} height={72} />
      <h1 className="font-bold text-[16px]">100+ Five Star Ratings</h1>
    </div>
  </div>
</div>

     </div>



     <div>
  <div className="h-screen bg-orange-300 flex flex-col-reverse lg:flex-row items-center">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start  lg:mt-28 px-8 lg:pl-[176px] gap-4">
      {/* Heading */}
      <h1 className="max-w-[376px] font-bold text-[28px] text-[#252B42]">
      I will help you find the property of your dreams.
      </h1>

      {/* Paragraph */}
      <p className="max-w-[376px] text-[20px] font-normal text-[#252B42]">
      The only name you need to know for real estate answers:<span className='font-extrabold'> Babar Bamsi </span>
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
