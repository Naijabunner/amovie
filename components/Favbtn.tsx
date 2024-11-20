"use client";

import { isFavorite, toggleFavorite } from "@/services/actions";
import { IndividualMovie, MovieTypes } from "@/types";
import { Heart } from "lucide-react";
import React, { useState } from "react";

const Favbtn = ({
  variant,
  movie,
}: {
  variant: string;
  movie: MovieTypes | IndividualMovie;
}) => {
  const [favStatus, setfavStatus] = useState(isFavorite(movie));
  const outline =
    " bg-[#21242D] flex h-10  w-14 justify-center items-center gap-x-2 rounded-md shadow-lg font-medium";
  const solid =
    " bg-none flex h-10  w-14 justify-center items-center gap-x-2 rounded-md shadow-lg font-medium ";

  const style = variant === "outline" ? outline : solid;
  const color = favStatus ? "fill-primary stroke-primary" : "";

  const handleClick = () => {
    toggleFavorite(movie);
    setfavStatus((prev) => !prev);
  };
  return (
    <button className={style} onClick={handleClick}>
      <Heart className={color} />
    </button>
  );
};

export default Favbtn;
