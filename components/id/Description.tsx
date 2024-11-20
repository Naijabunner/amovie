import React from "react";

const Description = ({ overview }: { overview: string }) => {
  return (
    <div className='p-3 md:p-5 md:col-span-2  bg-[#21242D] rounded-lg'>
      <h3 className='my-3 text-lg md:text-xl'>Description</h3>
      <p className=' text-sm md:text-base'>{overview}</p>
    </div>
  );
};

export default Description;
