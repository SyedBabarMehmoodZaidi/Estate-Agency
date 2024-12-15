import Image from 'next/image'
import React from 'react'
import ContactBanner from '/public/Images/contactbanner.jpg'
import Bamsi from '/public/Images/bamsi.jpg'

const page = () => {
  return (
    <div>
    <div className="relative w-full">
      <Image
        src={ContactBanner}
        alt="banner"
        layout="responsive"
        width={100}
        height={50}
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-bold text-6xl text-white">Contact Us</h1>
        <p className="font-bold text-2xl text-yellow-100">
          Feel free to contact me for trustworthy and efficient property services.
        </p>
      </div>
    </div>
  
    <div >
    <div className="max-w-lg mx-auto p-8 rounded-lg bg-blue-950 backdrop-blur-md text-center border border-transparent mt-24">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-white mb-4">Get in touch</h1>
      <p className="text-white mb-6">
        Drop a line, give me a call, or send a message by submitting the form.
      </p>
  
      {/* Form */}
      <form className="space-y-6">
        {/* Name Field */}
        <div className="text-left">
          <label htmlFor="name" className="block text-sm font-bold text-white mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-2 border border-gray-300 rounded-md bg-white/80 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
  
        {/* Email Field */}
        <div className="text-left">
          <label htmlFor="email" className="block text-sm font-bold text-white mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-2 border border-gray-300 rounded-md bg-white/80 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
  
        {/* Message Field */}
        <div className="text-left">
          <label htmlFor="message" className="block text-sm font-bold text-white mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={8}
            required
            className="w-full p-2 border border-gray-300 rounded-md bg-white/80 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-red-600 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
    </div>


    <div>
  <div className="h-screen bg-orange-300 flex flex-col-reverse lg:flex-row items-center mt-24">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start items-start  lg:mt-28 px-8 lg:pl-[176px] gap-4">
      {/* Heading */}
      <h1 className="max-w-[376px] font-bold text-[28px] text-[#252B42]">
      I will help you find the property of your dreams.
      </h1>

      {/* Paragraph */}
      <p className="max-w-[376px] text-[20px] font-normal text-[#252B42]">
      Feel Free To Contact Us:<span className='font-extrabold'> Babar Bamsi </span>
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
