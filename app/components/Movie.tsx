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
}

const Movie: React.FC<Props> = (
  { movie }
) => {
  return (
    <div
      className="
      bg-white
      text-black
        max-w-[18rem]
        rounded-xl
        rounded-t-2xl
      "
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={`${movie.title}`}
        className="rounded-t-xl"
      />
      <p>{movie.title}</p>
      <p>{movie.vote_average}</p>
      <p
        className="
          relative
          h-0
          overflow-hidden
          hover:h-auto
        "
      >
        {movie.overview}
      </p>
    </div>
  )
}

export default Movie