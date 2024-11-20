import Favbtn from '@/components/Favbtn'
import Description from '@/components/id/Description'
import Details from '@/components/id/Details/Details'
import DetailsLayout from '@/components/id/Details/DetailsLayout'
import ProductionCompanies from '@/components/id/ProductionCompanies'
import { constants } from '@/constants/env'
import { getMoviesById } from '@/services/http'
import { BadgeDollarSign, Calendar, CheckCircle, Heart, Languages, Play, SquareStack } from 'lucide-react'
import { InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import React from 'react'

export type allDetailsType={
  title: string,
  type: "text" | "array",
  value: string | any[],
  Icon?: any, 
}




const page =  async({ params }: {params: any}) => {
  const { id } = await params;

    const [data, error]= await getMoviesById(id.toString())

    if (!data) {
      //@ts-ignore
      return;
    }
    if (error) {
      return(
        <h1 className=' justify-center flex mb-10 text-lg text-red-700'>
        An Error Occured
        </h1>
      )
    }


    const alldetails:allDetailsType[] = [
      {
        title: "status",
        type: "text",
        value: data.status,
        Icon: CheckCircle,
      },
      {
        title: "Released Year",
        type: "text",
        value: "200",
        Icon: Calendar,
      },
      {
        title: "budget",
        type: "text",
        value: data.budget.toString(),
        Icon: BadgeDollarSign,
      },
      {
        title: "genres",
        type: "array",
        value: "",
        Icon: SquareStack,
      },
      {
        title: "selected languages",
        type: "array",
        value: "",
        Icon: Languages,
      },
    ];

  return (
    <section className=' max-lg:mx-3'>
      <div className='imageCard bg-slate-700 relative max-h-[500px] overflow-hidden rounded-lg max-w-[1100px] mx-auto'>
        <Image
          src={
            `${constants.imageUrl}${data.backdrop_path}`
          }
          alt={data.title}
          width={400}
          height={400}
          quality={100}
          unoptimized
          className=' w-full aspect-video'
          placeholder='blur'
          blurDataURL='https://image.tmdb.org/t/p/w45/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg'
        />
        <div className='bg-gradient-to-b from-transparent via-transparent  to-primary absolute z-10 top-0 h-full w-full' />
        
        <div className='cta absolute  z-20 bottom-10 w-full justify-center items-center flex  gap-x-4'>
        <h2 className='absolute font-semibold text-2xl md:text-3xl lg:text-4xl z-20 bottom-20 w-fit flex justify-center items-center'>
          {data.title}
        </h2>
          <button className=' bg-[#21242D] flex h-10  w-20 justify-center items-center gap-x-2 rounded-md shadow-lg font-medium cursor-not-allowed'>
            <Play />
            Play
          </button>
         <Favbtn variant={'outline'} movie={data}/>
        </div>
      </div>
      <div className='details my-10 grid md:grid-cols-3 gap-6 min-h-72 max-w-[1100px] mx-auto'>
        <Description overview={data.overview} />
        <Details alldetails={alldetails} />
        <ProductionCompanies companies={data.production_companies} />
      </div>
    </section>
  );
}

export default page