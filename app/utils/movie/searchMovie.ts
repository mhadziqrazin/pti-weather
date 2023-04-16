import { MovieProps } from "@/app/components/Movie"
import { SetStateAction } from "react"

const searchMovie = async (
  e: React.FormEvent<HTMLFormElement>,
  search: string,
  setLoading: (value: SetStateAction<boolean>) => void,
  setMovies: (value: SetStateAction<MovieProps[]>) => void
) => {
  setLoading(true)
  e.preventDefault()

  // replace white space with + for parameter
  search = search.replace(/\s+/g, '+')

  // fetch movie with parameter
  const res = await fetch(`/api/movie/search/${search}`)
  const data = await res.json()

  if (data === 'invalid' || data === 'internal') {
    throw Error()
  }
  
  setMovies(data.results)
  setLoading(false)
}

export default searchMovie