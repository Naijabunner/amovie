import Homepage from "@/components/Homepage";
import SideDisplayLayout from "@/components/SideDisplayLayout";
import { getPopularMovies } from "@/services/http";

export default async function Home() {
  const [data, error]= await getPopularMovies()

  if (!data) {
    return;
  }
  if (error) {
    return(
      <h1 className=' justify-center flex mb-10 text-lg text-red-700'>
      An Error Occured
      </h1>
    )
  }
  return (
    <section className='m-5 mt-10 lg:flex gap-x-5 max-w-[1350px] mx-auto'>
      <SideDisplayLayout />
      <Homepage result={data?.results} title={"Popular Movies From TMDB"} style={"bg-primary"}  />
    </section>
  );
}
