'use client';

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import Testimonials1 from '/public/Images/testimonial1.jpg';
import Testimonials2 from '/public/Images/testimonial2.jpg';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-orange-300">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center mt-28">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[40px] flex items-center text-[#252B42]">
            Testimonials
          </h1>
          <p className="font-normal text-[14px] text-[#252B42] mt-2">
            I assist my customers in getting to the heart of their real estate
            <br />
            demands, desires, and outcomes. I&apos;m in this for the long term.
          </p>
        </div>
      </div>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 px-12 py-20">
        {/* First Column - Video */}
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="relative w-full h-full hover:shadow-xl hover:scale-[1.05] transition duration-300">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 rounded-lg"
              src="/Videos/happybuyer.mp4"
              loop
              muted
              style={{ width: '100%', height: '100%' }}
            />
            {!isPlaying && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl"
                aria-label="Play Video"
                onClick={handlePlayPause}
              >
                ▶
              </button>
            )}
          </div>
        </div>

        {/* Second Column - First Testimonial */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full h-full flex flex-col justify-center hover:shadow-xl hover:scale-[1.05] transition duration-300">
          <div className="flex justify-center mb-4 ">
            <Image
              src={Testimonials1}
              alt="houseImage"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <h1 className="font-bold text-[24px] text-center mb-2">Brilliant Service</h1>
          <p className="text-gray-600 text-center mb-4">
            Justin is really brilliant. He assisted me in finding the perfect apartment. I also acquired the apartment for less than the market rate!
          </p>
          <div className="flex justify-center items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color="gold" size={20} />
            ))}
          </div>
          <h1 className="font-bold text-center text-[18px] mb-2">Chris Gayle</h1>
          <p className="text-gray-600 text-center">Happy Seller</p>
        </div>

        {/* Third Column - Second Testimonial */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full h-full flex flex-col justify-center hover:shadow-xl hover:scale-[1.05] transition duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src={Testimonials2}
              alt="houseImage"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <h1 className="font-bold text-[24px] text-center mb-2">Very Skilled Agent</h1>
          <p className="text-gray-600 text-center mb-4">
            Justin was the most skilled realtor I&apos;ve ever worked with. I would certainly refer him to anybody seeking an excellent solution.
          </p>
          <div className="flex justify-center items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color="gold" size={20} />
            ))}
          </div>
          <h1 className="font-bold text-center text-[18px] mb-2">David Warner</h1>
          <p className="text-gray-600 text-center">Happy Buyer</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
