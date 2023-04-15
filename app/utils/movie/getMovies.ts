import { SetStateAction } from "react"

const getMovies = async () => {
  const res = await fetch('/api/movie/all')
  const data = await res.json()

  return(data)
}

export default getMovies