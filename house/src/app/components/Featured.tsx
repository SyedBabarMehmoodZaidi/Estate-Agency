import Image from 'next/image'
import React from 'react'
import HouseSale from '/public/Images/housesale.jpg'
import HouseSale2 from '/public/Images/housesale2.jpg'
import HouseRent from '/public/Images/houserent.jpg'
import HouseRent2 from '/public/Images/houserent2.jpg'
import Location from '/public/Images/location.png'

const Featured = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen mt-56">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[40px] flex items-center text-[#252B42]">Featured Properties</h1>
      <p className="font-normal text-[14px] text-[#252B42] mt-2">
        Look no further than the highlighted, magnificent home <br />
        for your next stay. The surrounding area is charming, <br />
        sophisticated, and visually stunning.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  py-10">
  {/* Left Column */}
  <div>
    {/* HouseSale */}
    <div className="flex flex-col items-center">
      <Image src={HouseSale} alt="housesale" width={510} height={300} />
      <div className="mt-4 text-center">
        <p className="flex justify-center items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          North Nazimabad, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">North Heaven Place</h1>
        <p className="font-normal text-gray-500 text-[14px]">
          North Heaven House for sale: Prime location, <br />
          modern design, spacious, affordable price, <br />
          ideal for families and investors.
        </p>
        <p className="flex justify-center items-center text-orange-600 hover:text-blue-950">
          $3,86,000{" "}
          <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400"><br />
            <span className='text-gray-500'>View Listing</span>
           
          </button>
        </p>
      </div>
    </div>
  </div>

  {/* Right Column */}
  <div className="grid gap-8">
    {/* HouseRent */}
    <div className="flex">
      <Image src={HouseRent} alt="houserent" width={240} height={242} />
      <div className="ml-4">
        <p className="flex items-center font-bold text-gray-500 text-[14px]">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          Defence Phase 8, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Bamsi Place</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">
          $9,000{" "}
          <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400"><br />
            <span className='text-gray-500'>View Listing</span>
            
          </button>
        </p>
      </div>
    </div>

    {/* HouseSale2 */}
    <div className="flex">
      <Image src={HouseSale2} alt="housesale2" width={240} height={242} />
      <div className="ml-4">
        <p className="flex items-center font-bold text-[14px] text-gray-500">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          Gulshan-Iqbal, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Saima Villas</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">  
          $3,25,000{" "}
          <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400"><br />
            <span className='text-gray-500'>View Listing</span>
           
          </button>
        </p>
      </div>
    </div>

    {/* HouseRent2 */}
    <div className="flex">
      <Image src={HouseRent2} alt="houserent2" width={240} height={242} />
      <div className="ml-4">
        <p className="flex items-center font-bold text-[14px] text-gray-500">
          <Image src={Location} alt="locationicon" width={22} height={22} />
          Gulistan-e-Johar, Karachi
        </p>
        <h1 className="font-bold text-[24px] text-[#252B42]">Al-Ghafoor Place</h1>
        <p className="flex items-center text-orange-600 hover:text-blue-950">
          $10,000{" "}
          <button className="flex items-center space-x-2 text-[14px] bg-transparent border-none underline decoration-black hover:decoration-gray-400"><br />
            <span className='text-gray-500'>View Listing</span>
           
          </button>
        </p>
      </div>
    </div>
  </div>
</div>


  </div>
  
  )
}

export default Featured
