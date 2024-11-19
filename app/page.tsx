import MainDisplayCard from "@/components/mainDisplayCard";
import MainDisplayLayout from "@/components/mainDisplayLayout";
import SideDisplayCard from "@/components/sideDisplayCard";
import { getPopularMovies } from "@/services/http";
import Image from "next/image";

export default async function Home() {
  const [data, error]= await getPopularMovies()
  // console.log(data)
  // console.log(error)
  return (
    <section className='m-5 mt-10 flex gap-x-20 max-w-[1350px] mx-auto'>
     <SideDisplayCard/>
   <MainDisplayLayout result= {data?.results}/>
       </section>
  );
}
