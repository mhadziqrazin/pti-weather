import Link from "next/link"
import Container from "../Container"

const Navbar = () => {
  return (
    <nav className="py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="text-pr font-bold animated">
              <span className="text-blue-500">
                
              </span>
              &nbsp;
              <span className="text-red-500">
                Weather
              </span>
            </div>
          </Link>
          <Link href={"/movie"}>
            <div className="text-pr font-bold animated">
              <span className="text-blue-500">
                
              </span>
              &nbsp;
              <span className="text-red-500">
                Movies
              </span>
            </div>
          </Link>

        </div>
      </Container>
    </nav>
  )
}

export default Navbar