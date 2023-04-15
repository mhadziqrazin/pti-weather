'use client'

import { useCallback, useEffect, useState } from "react"
import Movie, { MovieProps } from "../components/Movie"
import Container from "../components/Container"

export default function Movies() {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [loading, setLoading] = useState(false)
  const getMovies = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/movie/all')
    const data = await res.json()

    // if (data === 'internal')
    console.log(res)
    setMovies(data.results)
    setLoading(false)
  }, [])
  useEffect(() => {
    getMovies()
  }, [getMovies])


  return (
    <Container>
      <div>
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
