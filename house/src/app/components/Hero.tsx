import React from 'react';

const Hero = () => {
  return (
   
    <div  >
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    src="/Videos/House.mp4"
    autoPlay
    loop
    muted
  />
  
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Black overlay */}

  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10">
    
    <h1 className="font-bold text-[48px] text-white mb-4">BABAR BAMSI</h1>
    <p className="font-bold text-[26px]  mb-8 text-yellow-100">I Deliver The Very Best In All Facets Of <span className='text-white font-extrabold'> Real Estate. </span> <br /> 
      Because You Deserve no less.</p>
    
    <div className="flex justify-center items-center gap-8">
      <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white">
        CONTACT ME
      </button>
      <button className="text-white flex items-center space-x-2 bg-transparent border-none underline decoration-white hover:decoration-gray-400">
        <span>View Listing</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9l3 3-3 3M7 9l-3 3 3 3" />
        </svg>
      </button>
    </div>
  </div>
</div>

  
  
  );
};

export default Hero;
