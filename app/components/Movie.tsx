import { SetStateAction, useState } from "react"
import addWatchlist from "../utils/movie/addWatchlist"
import Button from "./Button"

export interface MovieProps {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface Props {
  movie: MovieProps
  children: React.ReactNode
}

const Movie: React.FC<Props> = (
  { movie, children }
) => {
  return (
    <div
      className="
      bg-gray-900
        max-w-[18rem]
        rounded-xl
        relative
        overflow-hidden
        group
      "
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={`${movie.title}`}
      />
      <div className="h-ful">
        <div
          className="
            text-sc
            font-medium
            p-4
            flex
            place-content-between
            gap-2
            items-center
          "
        >
          <p>{movie.title}</p>
          <p>{movie.vote_average}</p>
        </div>

        <div
          className="
            p-4
            flex
            flex-col
            gap-3
            absolute
            bottom-0
            bg-gray-900
            text-white
            group-hover:drop-shadow-[0_0px_25px_rgba(0,0,0)]
            rounded-xl
            overflow-y-auto
            max-h-full
            translate-y-full
            group-hover:translate-y-0
            animated
          "
        >
          <p className="font-bold text-sc">
            Description:
          </p>
          <p
            className="
            text-sc
          "
          >
            {movie.overview}
          </p>
          <div className="flex place-content-center">
            {children}
          </div>
        </div>
      </div>

    </div>

  )
}

export default Movie