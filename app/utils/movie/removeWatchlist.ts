import { MovieProps } from "@/app/components/Movie";
import { SetStateAction } from "react";

const removeWatchlist = (
  id: number,
  setMovies: (value: SetStateAction<MovieProps[]>) => void
) => {
  const storedData = localStorage.getItem('watchlist')
  if (storedData) {
    const movies = JSON.parse(storedData)

    // remove movie
    var removeIndex = movies.map((movie: MovieProps) => movie.id).indexOf(id)
    ~removeIndex && movies.splice(removeIndex, 1)

    // set new movies
    localStorage.setItem('watchlist', JSON.stringify(movies))
    setMovies(movies)
  }
}

export default removeWatchlist