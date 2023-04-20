import Link from "next/link"
import Container from "../Container"

const Navbar = () => {
  return (
    <nav className="py-4 sticky top-0 z-50 bg-black">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="text-pr font-bold animated">
              <span className="text-blue-500">
                PTI
              </span>
              &nbsp;
              <span className="text-red-500">
                Weather
              </span>
            </div>
          </Link>
          <div className="flex gap-4 items-center">
            <Link
              href={`/movie/watchlist`}
              className="
                text-sc
                text-gray-500
                hover:text-white
                animated
              "
            >
              Watchlist
            </Link>
            <Link
              href={`/movie/search`}
              className="
                text-sc
                text-gray-500
                hover:text-white
                animated
              "
            >
              Search
            </Link>
            <Link href={"/movie"}>
              <div className="text-pr font-bold animated">
                <span className="text-blue-500">
                  PTI
                </span>
                &nbsp;
                <span className="text-red-500">
                  Movies
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar