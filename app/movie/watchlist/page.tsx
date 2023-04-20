'use client'

import Button from "@/app/components/Button"
import Container from "@/app/components/Container"
import Movie, { MovieProps } from "@/app/components/Movie"
import Navbar from "@/app/components/navbar/MovieNav"
import removeWatchlist from "@/app/utils/movie/removeWatchlist"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Slide, ToastContainer } from "react-toastify"

export default function Watchlist() {
  // watchlists and loading remove state
  const [movies, setMovies] = useState<MovieProps[]>([])

  // get watchlist from local storage
  useEffect(() => {
    const storedData = localStorage.getItem('watchlist')
    if (storedData) {
      setMovies(JSON.parse(storedData))
    }
  }, [setMovies])

  return (
    <Container>
      <Navbar />
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
      <Link href={'/movie'} className="hover:text-blue-300 animated flex place-content-center mt-10">
        &lt; Back to movie page
      </Link>
      {movies.length !== 0 ?
        <div className="p-10">
          <h1 className="text-pr text-center mb-10 scale-125 animated">
            My Watchlist
          </h1>
          <div className="flex flex-wrap gap-10 place-content-center">
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie}>
                <Button
                  type="button"
                  onClick={() => { removeWatchlist(movie.id, setMovies) }}
                  disabled={false}
                  className="
                    font-medium
                    text-sc
                  text-red-500
                    bg-transparent
                    border-2
                  border-red-500
                    hover:bg-red-500 hover:text-gray-900
                    px-4
                    py-2
                    rounded-lg
                    w-fit
                    animated
                  "
                >
                  Remove
                </Button>
              </Movie>
            ))}
          </div>
        </div> :
        <h1 className="text-center text-pr mt-20">
          You don&apos;t have any watchlist :D
        </h1>
      }
    </Container>
  )
}