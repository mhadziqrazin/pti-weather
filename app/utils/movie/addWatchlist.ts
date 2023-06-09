import { MovieProps } from "@/app/components/Movie"
import { SetStateAction } from "react"

const addWatchlist = async (
  movie: MovieProps,
  setLoading: (value: SetStateAction<boolean>) => void
) => {
  setLoading(true)

  // add movie to local storage
  var movies: MovieProps[] = []
  const storedData = localStorage.getItem('watchlist')
  if (storedData) {
    movies = (JSON.parse(storedData))
    var has = false
    for (var i = 0; i < movies.length; i++) {
      if (movies[i].id === movie.id) {
        has = true
        break
      }
    }

    // to ensure watchlist is unique
    if (!has) {
      movies.push(movie)
    }

    // setWatchlist((prevWatchlist) => [movie, ...prevWatchlist])
    localStorage.setItem('watchlist', JSON.stringify(movies))

  } else {
    // if local sotrage have not set
    localStorage.setItem('watchlist', JSON.stringify([movie]))
  }
  setLoading(false)
}

export default addWatchlist