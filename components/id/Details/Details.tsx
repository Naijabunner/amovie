import React from 'react'
import DetailsLayout from './DetailsLayout'
import { allDetailsType } from '@/app/[id]/page'

const Details = ({ alldetails }:{ alldetails: allDetailsType[] }) => {
  return (
    <div className=' md:row-span-2  bg-[#21242D] rounded-lg p-3 md:p-5'>
    {
        alldetails.map((detail, index)=>{
            return(
                <DetailsLayout
                key={index}
                {...detail}
                />
            )
        })
    }
</div>
  )
}

export default Details