import { Tv } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
    <header className=' flex items-center gap-x-2'>
      <Tv className=' text-primary h-8 max-md:h-6 w-8 max-md:w-6 ' />
      <h1 className='logo text-base sm:text-lg md:text-xl self-end font-semibold'>
        MOVIE
      </h1>
    </header>
    </Link>
  );
}

export default Logo