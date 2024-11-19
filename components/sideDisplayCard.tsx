import Image from "next/image";
import React from "react";

const SideDisplayCard = () => {
  return (
    <div className='sideDispalyBar max-lg:hidden w-full max-w-[250px]'>
      <div className='title'>
        <h2 className=' text-sm sm:text-base md:text-lg'>
          Top Movies From TDE
        </h2>
        <div className='line relative after:h-full after:sm:w-20 after:w-[20%] after:bg-yellow-300 after:absolute bg-black h-1 rounded-full overflow-hidden' />
      </div>
      <div className='cardWrapper my-5'>
        <div className='card flex max-w-[250px] gap-x-3 hover:underline '>
          <div className='imageCard bg-[#21242D] h-[137px] w-[82px] overflow-hidden rounded-xl shadow-sm shadow-[#21242D] relative'>
            <Image
              src={
                "https://image.tmdb.org/t/p/original/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
              }
              alt='title'
              width={232}
              height={336}
              className=' bg-green-100 h-full w-full object-center opacity-85'
            />
          </div>
          <div className='details text-sm'>
            <p className='description text-4xl font-semibold'>
              1 <br />
              <span className=' text-2xl'>mr robot</span>
            </p>
            <p className='title'>The Wild Robot</p>
            <p className='ratings'>8.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDisplayCard;
