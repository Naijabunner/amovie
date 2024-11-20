import { IndividualMovie, MovieTypes } from "@/types"

const addToFavorite = (movie: MovieTypes | IndividualMovie) => {
  const isValidArr = localStorage.getItem("allMovies");
  let stringifyArr;
  if (isValidArr) {
    const parsedArr = JSON.parse(isValidArr);
    const newArr = [...parsedArr, movie];
    stringifyArr = JSON.stringify(newArr);
  } else {
    stringifyArr = JSON.stringify([movie]);
  }
  localStorage.setItem("allMovies", stringifyArr);
};


const removeFromFavorite = (movie: MovieTypes | IndividualMovie) => {
  const isValidArr = localStorage.getItem("allMovies");

  if (isValidArr) {
    const parsedArr = JSON.parse(isValidArr);
    const filterArr = parsedArr.filter((ent: any) => ent.id !== movie.id);
    const strigifyArr = JSON.stringify(filterArr);
    localStorage.setItem("allMovies", strigifyArr);
  }
};


export const toggleFavorite = (movie: MovieTypes | IndividualMovie) => {
  const isValidArr = localStorage.getItem("allMovies");
  if (isValidArr) {
    const parsedArr = JSON.parse(isValidArr);
    const isPresent = parsedArr.filter((ent: any) => ent.id === movie.id);

    if (isPresent.length > 0) {
      removeFromFavorite(movie);
    } else {
      addToFavorite(movie);
    }
  } else {
    addToFavorite(movie);
  }
};


export const isFavorite=(movie: MovieTypes | IndividualMovie)=>{
    const isValidArr = localStorage.getItem("allMovies");
    let isFav;
    if (isValidArr) {
        const parsedArr = JSON.parse(isValidArr);
        const filteredArr = parsedArr.filter((ent: any) => ent.id === movie.id);
     isFav = filteredArr.length > 0
    }
    return isFav
}


export const getAllFavorite = () => {
  const isValidArr = localStorage.getItem("allMovies");

  let data;
  if (isValidArr) {
    const parsedArr = JSON.parse(isValidArr);
    data = parsedArr;
  } else {
    data = null;
  }
  return data;
};
