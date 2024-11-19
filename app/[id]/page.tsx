import { constants } from '@/constants/env'
import { Heart, Play } from 'lucide-react'
import Image from 'next/image'
import { stringify } from 'querystring'
import React from 'react'


const data ={
    "adult": false,
    "backdrop_path": "/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg",
    "belongs_to_collection": {
      "id": 1069584,
      "name": "Gladiator Collection",
      "poster_path": "/r7uyUOB6fmmPumWwHiV7Hn2kUbL.jpg",
      "backdrop_path": "/1VdLvSIeHuwqCT13H9EafxCacGB.jpg"
    },
    "budget": 310000000,
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "homepage": "https://www.gladiator.movie",
    "id": 558449,
    "imdb_id": "tt9218128",
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_title": "Gladiator II",
    "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
    "popularity": 2557.256,
    "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    "production_companies": [
      {
        "id": 4,
        "logo_path": "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
        "name": "Paramount Pictures",
        "origin_country": "US"
      },
      {
        "id": 14440,
        "logo_path": "/5QbaGiuxc91D6qf75JZGX6OKXoU.png",
        "name": "Red Wagon Entertainment",
        "origin_country": "US"
      },
      {
        "id": 49325,
        "logo_path": "/R05WCoCJcPWGSDaKaYgx3AeVuR.png",
        "name": "Parkes+MacDonald Image Nation",
        "origin_country": "US"
      },
      {
        "id": 221347,
        "logo_path": "/6Ry6uNBaa0IbbSs1XYIgX5DkA9r.png",
        "name": "Scott Free Productions",
        "origin_country": "US"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "release_date": "2024-11-13",
    "revenue": 0,
    "runtime": 148,
    "spoken_languages": [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "Prepare to be entertained.",
    "title": "Gladiator II",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 319
  }
const page = async({ params }:{ params:{id:string| number}}) => {
    console.log(params)
    const { id }=  params
  return (
    <section className=' max-lg:mx-3'>
      <div className='imageCard bg-slate-700 relative max-h-[500px] overflow-hidden rounded-lg max-w-[1100px] mx-auto'>
        <Image
          src={
            //   `${constants.imageUrl}${data.backdrop_path}`
            "https://image.tmdb.org/t/p/original/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg"
            // "https://image.tmdb.org/t/p/original/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
          }
          alt={data.title}
          width={400}
          height={400}
          quality={100}
          unoptimized
          className=' w-full aspect-video'
          placeholder='blur'
          blurDataURL='https://image.tmdb.org/t/p/w45/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg'
          // className='bg-primary  h-full w-full object-center opacity-85 duration-[0.8s] hover:scale-[1.1] transition-all ease-in-out'
        />
        <div className='bg-gradient-to-b from-transparent via-transparent  to-primary absolute z-10 top-0 h-full w-full' />

        <div className='cta absolute  z-20 bottom-10 w-full justify-center items-center flex  gap-x-4'>
          <button className=' bg-[#21242D] flex h-10  w-20 justify-center items-center gap-x-2 rounded-md shadow-lg font-medium cursor-not-allowed'>
            <Play />
            Play
          </button>
          <button className=' bg-[#21242D] flex h-10  w-14 justify-center items-center gap-x-2 rounded-md shadow-lg font-medium cursor-not-allowed'>
            <Heart/>
          </button>

        </div>

      </div>



      <div className="details grid md:grid-cols-3 gap-6 min-h-72 max-w-[1100px] mx-auto">
        <div className=" md:col-span-2  bg-[#21242D] rounded-lg">
 <h3>
    Description
 </h3>
 <p>
    {data.overview}
 </p>
        </div>
        <div className=" md:row-span-2  bg-[#21242D] rounded-lg"></div>
        <div className=" md:col-span-2 bg-[#21242D] rounded-lg">
            <h3>
                production_companies
            </h3>

        </div>
      </div>
    </section>
  );
}

export default page