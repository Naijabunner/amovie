'use client'
import MainDisplayLayout from '@/components/mainDisplayLayout'
import { getAllFavorite } from '@/services/actions'
import { MovieTypes } from '@/types'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [allData, setallData] = useState<MovieTypes[]>([])

  useEffect(()=>{
    if (typeof window !== 'undefined') {
    const data =getAllFavorite()
    setallData(data)
    }
  },[])

  return (
    <section>
      <MainDisplayLayout result={allData} title={"Favorite List"} style={"primary"}  />
      {!allData && (<p className='w-fit mx-auto'> Favorite list is empty </p>)}

    </section>
  )
}

export default page