'use client'

import { useCallback, useEffect, useState } from "react"
import Movie, { MovieProps } from "../components/Movie"

export default function Movies() {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [loading, setLoading] = useState(false)
  const getMovies = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/movie/all')
    const data = await res.json()

    setMovies(data)
    setLoading(false)
  }, [])
  useEffect(() => {
    getMovies()
  }, [getMovies])


  return (
    <div>
      {!loading ?
        <div className="flex flex-wrap gap-2 place-content-center">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie}></Movie>
          ))}
        </div> : <div>loading..</div>
      }
    </div>
  )
}
