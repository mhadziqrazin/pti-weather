'use client'

import { useCallback, useEffect, useState } from "react"
import Movie, { MovieProps } from "../components/Movie"
import Container from "../components/Container"
import { Slide, ToastContainer, toast } from "react-toastify"

export default function Movies() {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [loading, setLoading] = useState(false)
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
      <div className="px-10">
        {!loading ?
          <div className="flex flex-wrap gap-10 place-content-center">
            {movies.map((movie) => (
              <Movie key={movie.id} movie={movie}></Movie>
            ))}
          </div> : <div>loading..</div>
        }
      </div>
    </Container>

  )
}
