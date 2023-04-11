import Container from "../Container"

const Navbar = () => {
  return (
    <nav className="py-4">
      <Container>
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold">
            <span className="text-blue-500">
              PTI
            </span>
            &nbsp;
            <span className="text-red-500">
              Weather
            </span>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar