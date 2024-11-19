import { dataType, MovieTypes } from "@/types";

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // this is suppose to be in an .env but its hardcoded for teste purposes
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjU3N2ZkY2NiM2Q1ZTFmZjQ0ZmJkMDExZmY1NDY0ZSIsIm5iZiI6MTczMTkzMTI0Ni40Njc4NjA1LCJzdWIiOiI2NzNiMmIzMWRjNGJiYzAxYzY5MWRlZTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.p_NSEFfWzxsr6OMieUIhOKdb4-h5zeQJ3rUumJ9uppc'
  },
  next: { revalidate: 33600 }
};

  export const getPopularMovies = async (): Promise<[dataType | null, string | null]> => {
    let data = null;
    let error = null;

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const parsedres = await response.json();
        data = parsedres;
      } else {
        throw "Something went wrong";
      }
    } catch (err) {
        error = err instanceof Error ? err.message : String(err);
    }

    return [data, error];
  };
  