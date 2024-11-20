import { allDetailsType } from "@/app/[id]/page";
import React, { FC, ReactNode } from "react";

const DetailsLayout:FC<allDetailsType> = ({title,type,value, Icon }) => {

    const TypeArrayLayout=()=>{
        return(
            <>
            
            </>
        )
    }
    const TypeTextLayout=()=>{
        return(
            <p className=" text-sm ml-5">
                {value}
            </p>
        )
    }
  return (
    <div className=" my-5">
      <p className='mb-2 flex text-sm opacity-80 gap-x-2'>
        <span>
          {Icon && <Icon className=' h-4 w-4 text-primary' />}
        </span>
        {title}
      </p>
      {type === "text" ? <TypeTextLayout /> : <TypeArrayLayout />}
    </div>
  );
};

export default DetailsLayout;
