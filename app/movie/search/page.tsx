'use client'

import { useCallback, useEffect, useState } from "react"
import { Slide, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Link from "next/link"
import { PacmanLoader, PulseLoader } from "react-spinners"
import Movie, { MovieProps } from "@/app/components/Movie"
import addWatchlist from "@/app/utils/movie/addWatchlist"
import Container from "@/app/components/Container"
import Button from "@/app/components/Button"
import Input from "@/app/components/Input"
import useComponentDisabler from "@/app/hooks/useComponentDisabler"
import searchMovie from "@/app/utils/movie/searchMovie"
import Navbar from "@/app/components/navbar/MovieNav"

export default function Movies() {
  // state of movies and the loading when fetching and add it
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [loading, setLoading] = useState(false)
  const [addLoading, setAddLoading] = useState(false)

  // add watchlist with toast
  const addWatchlistToast = (movie: MovieProps) => {
    addWatchlist(movie, setAddLoading)
    toast.success(`Success added movie: ${movie.title}!`)
  }

  // state for input search bar value
  const [search, setSearch] = useState("")

  // state for input & button search visibility
  const [disabledButton, setDisabledButton] = useState(true)
  // disable search button when input field empty
  useComponentDisabler(setDisabledButton, search)

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
      <div className="mt-10">
      <form
        onSubmit={(e) => {
          searchMovie(e, search, setLoading, setMovies)
        }}
        className="
          flex
          flex-col
          gap-2
          items-center
          px-10
          sm:px-36
          md:px-40
          xl:px-72
        "
      >
        <Input
          type="text"
          placeholder="search movie"
          value={search}
          onChange={(e) => { setSearch(e.target.value) }}
          className={`
            px-2
            text-sc
            text-center
            font-medium
            h-7
            sm:h-10
            xl:h-12
            w-full
            text-white
            bg-transparent
            border-b-2
            border-blue-300
            rounded-sm
            outline-none
            placeholder:italic
            focus:placeholder:text-transparent
            animated
          `}
        />
        <Button
          type="submit"
          disabled={disabledButton}
          className={`
            flex
            place-content-center
            items-center
            text-sc
            font-medium
            w-5/12
            py-1
            px-2
            rounded-lg
            border-2
            border-blue-300
            animated
            ${!disabledButton ?
              "hover:bg-transparent hover:text-blue-300 bg-blue-300 text-black"
              : "opacity-50 cursor-not-allowed bg-transparent text-blue-300"
            }
          `}
        >
          &nbsp;Search
        </Button>
      </form>
      </div>
      <div className="p-10">
        {!loading ?
          <div className="flex flex-wrap gap-10 place-content-center">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                movie={movie}
              >
                <Button
                  type="button"
                  onClick={() => { addWatchlistToast(movie) }}
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
