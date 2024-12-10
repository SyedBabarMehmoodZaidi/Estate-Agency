import Image from 'next/image'
import React from 'react'
import Sale from '/public/Images/sale.jpg'
import Buy from '/public/Images/buy.png'
import Rent from '/public/Images/rent.jpg'
import Loan from '/public/Images/loan.jpg'
import Man from '/public/Images/man.png'
import Bamsi from '/public/Images/bamsi.jpg'
import King from '/public/Images/king.png'
import Follower from '/public/Images/follower.png'
import Map from '/public/Images/map.jpg'
import Star from '/public/Images/star.jpg'



const Property = () => {
  return (
    <div>
      
      <div className='flex justify-center items-center gap-4 mt-32'>

      <div className='w-[327px] h-[343px] flex flex-col justify-center items-center gap-6 bg-sky-300 hover:bg-blue-950 hover:text-white p-14'>
      
        <Image src={Sale} alt='saleicon' width={72} height={72}/>
        <h1 className='font-bold text-[20px]'>Sell Property</h1>
        <p className='font-normal text-[14px]'>Sell your property with confidence. Expert guidance, best deals, and hassle-free transactions.</p>
        <button className='font-normal text-[14px] flex items-center space-x-2 bg-transparent border-none underline decoration-black hover:decoration-gray-400'>View Service</button>
      </div>
  
      <div className='w-[327px] h-[343px] flex flex-col justify-center items-center gap-6 bg-sky-300 hover:bg-blue-950 hover:text-white p-14'>
      <Image src={Buy} alt='buyicon' width={72} height={72}/>
        <h1 className='font-bold text-[20px]'>Buy Property</h1>
        <p className='font-normal text-[14px]'>Find your perfect property today. Explore top listings with great deals and expert guidance.</p>
        <button className='font-normal text-[14px] flex items-center space-x-2 bg-transparent border-none underline decoration-black hover:decoration-gray-400'>View Service</button>
      </div>
      
      <div className='w-[327px] h-[343px] flex flex-col justify-center items-center gap-6  bg-sky-300 hover:bg-blue-950 hover:text-white p-14'>
      <Image src={Rent} alt='renticon' width={72} height={72}/>
        <h1 className='font-bold text-[20px]'>Rent Property</h1>
        <p className='font-normal text-[14px]'>Discover the perfect rental property with modern amenities, ideal locations, and affordable rates</p>
        <button className='font-normal text-[14px] flex items-center space-x-2 bg-transparent border-none underline decoration-black hover:decoration-gray-400'>View Service</button>
      </div>

      <div className='w-[327px] h-[343px] flex flex-col justify-center items-center gap-6  bg-sky-300 hover:bg-blue-950 hover:text-white p-14'>
      <Image src={Loan} alt='loanicon' width={72} height={72}/>
        <h1 className='font-bold text-[20px]'>Home Loan</h1>
        <p className='font-normal text-[14px]'>Get the best home loan rates with flexible terms, making homeownership easy and affordable</p>
        <button className='font-normal text-[14px] flex items-center space-x-2 bg-transparent border-none underline decoration-black hover:decoration-gray-400'>View Service</button>
      </div>
     
      </div>


      <div>
  <div className="h-screen mt-40 items-center bg-orange-300">
    <div className="flex h-[80%]">
      <div className="w-1/2 flex flex-col justify-start items-start mt-28 pl-[176px] gap-4">
        {/* Heading */}
        <h1 className="max-w-[376px] font-bold text-[28px] text-[#252B42]">
          I will help you in every way possible to locate your next residence.
        </h1>

        {/* Paragraph */}
        <p className="max-w-[376px] text-[20px] font-normal text-[#252B42]">
          Since 2019, I have assisted over 1500 customers in saving over 
          $85 million on their real estate transactions. I provide customers 
          with a personalized experience for selling, purchasing, and renting properties,
          as well as assistance in obtaining a home loan, with complete
          transparency and flawless service.
        </p>

        {/* Button */}
        <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md text-white">
          CONTACT ME
        </button>

        {/* Contact Information */}
        <p className="font-bold text-[#252B42] mt-4">Phone: +92 308 273 5132</p>
        <p className="font-bold text-[#252B42]">Fax: + 451 215 215</p>
      </div>

      {/* Right Side Image */}
      <div className="flex justify-center items-center w-1/2">
        <Image src={Bamsi} alt="Image description" width={450} height={900} />
      </div>
    </div>
  </div>
</div>

     
     <div>
      <div className='w-full h-[150px] bg-slate-600'>

      <div className='flex justify-center items-center gap-4 mt-28'>

<div className='w-[300px] h-[150px] flex flex-col justify-center items-center gap-6 bg-slate-500 text-white hover:bg-blue-950 hover:text-white p-14'>

  <Image src={King} alt='king' width={72} height={72}/>
  <h1 className='font-bold text-[16px]'>5+ Years of Experience</h1>
  
</div>

<div className='w-[300px] h-[150px] flex flex-col justify-center items-center gap-6 bg-slate-500 text-white hover:bg-blue-950 hover:text-white p-14'>
<Image src={Follower} alt='buyicon' width={72} height={72}/>
  <h1 className='font-bold text-[16px]'>1000+ Satisfied Client</h1>
 
</div>

<div className='w-[300px] h-[150px] flex flex-col justify-center items-center gap-6  bg-slate-500 text-white hover:bg-blue-950 hover:text-white p-14'>
<Image src={Map} alt='renticon' width={72} height={72}/>
  <h1 className='font-bold text-[16px]'>24 Location Covered</h1>
 
</div>

<div className='w-[300px] h-[150px] flex flex-col justify-center items-center gap-6  bg-slate-500 text-white hover:bg-blue-950 hover:text-white p-14'>
<Image src={Star} alt='loanicon' width={72} height={72}/>
  <h1 className='font-bold text-[16px]'>100+ Five Star Ratings</h1>
 
</div>

</div>
      </div>
     </div>

    </div>

  )
}

export default Property


// <div>
// <div>
//   <h1>I will help you in every way possible to locate your next residence.</h1>
  // <p>Since 2019, I have assisted over 1500 customers in saving over  $85 million on their real estate transactions. I provide customers with a personalized experience for selling, purchasing, and renting properties, as well as assistance in obtaining a home loan, with complete transparency and flawless service.</p>
  // <button>CONTACT ME</button>
//   <div>
//     <p></p>
//     <p></p>
//   </div>
// </div>
// <div></div>
// </div>

