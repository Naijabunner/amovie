'use client'
import { constants } from "@/constants/env";
import { ProductionCompany } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

const ProductionCompanies = ({companies}:{companies: ProductionCompany[]}) => {
  return (
    <div className='p-3 md:p-5 md:col-span-2 bg-[#21242D] rounded-lg mb-2'>
      <h3 className=" mb-3 md:mb-5 text-lg md:text-xl">Production Companies</h3>
      <div className='cardWrapper flex flex-wrap justify-center sm:justify-evenly items-center gap-5'>
        {companies.map((company, id) => {
          const [hasError, setHasError] = useState(false);
          if (hasError) return;
          return (
            <div className='card' key={id}>
              <div className='imageContainer bg-white min-h-[150px] flex justify-center items-center'>
                <Image
                  src={`${constants.imageUrl}${company.logo_path}`}
                  alt={company.name}
                  width={150}
                  height={200}
                  onError={() => setHasError(true)}
                  className=''
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductionCompanies;