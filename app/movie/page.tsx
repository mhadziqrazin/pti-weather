'use client'

import { useCallback, useEffect, useState } from "react"
import Movie, { MovieProps } from "../components/Movie"
import Container from "../components/Container"
import { Slide, ToastContainer, toast } from "react-toastify"
import Link from "next/link"
import Button from "../components/Button"
import addWatchlist from "../utils/movie/addWatchlist"
import { PacmanLoader, PulseLoader } from "react-spinners"

export default function Movies() {
  // state of movies and the loading when fetching and add it
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [loading, setLoading] = useState(false)
  const [addLoading, setAddLoading] = useState(false)

  // get movies from api
  const getMovies = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/movie/all')
    const data = await res.json()

    if (data === 'internal' || data === 'invalid') {
      toast.error("Sorry we have problem here :(")
      throw Error()
    }

    setMovies(data.results)
    setLoading(false)
  }, [])

  useEffect(() => {
    getMovies()
  }, [getMovies])

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
      />
      <div className="flex place-content-center gap-4 my-10">
        <Link
          href={`/movie/watchlist`}
          className="
            text-pr
            hover:text-blue-300
            hover:scale-110
            animated
          "
        >
          Watchlist
        </Link>
        <Link
          href={`/movie/search`}
          className="
            text-pr
            hover:text-blue-300
            hover:scale-110
            animated
          "
        >
          Search
        </Link>
      </div>
      <div className="px-10">
        {!loading ?
          <div className="flex flex-wrap gap-10 place-content-center">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                movie={movie}
              >
                <Button
                  type="button"
                  onClick={() => { addWatchlist(movie.id, setAddLoading) }}
                  disabled={false}
                  className="
                    font-medium
                    text-sc
                  text-gray-900
                  bg-blue-300
                    border-2
                  border-blue-300
                    hover:bg-transparent hover:text-blue-300
                    px-4
                    py-2
                    w-full
                    rounded-lg
                    animated
                  "
                >
                  {!addLoading ?
                    <div>Add to Watchlist</div> :
                    <PulseLoader
                      color="#93c4fd"
                      size={12}
                    />
                  }
                </Button>
              </Movie>
            ))}
          </div> :
          <div className="grid place-items-center my-40">
            <PacmanLoader color="#fff" size={35} speedMultiplier={1.5} />
          </div>
        }
      </div>
    </Container>

  )
}
