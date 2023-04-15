import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_KEY}`
  )

  // the movie api has internal server error
  if (res.status >= 500) {
    return NextResponse.json('internal')
  }

  // user input an invalid query
  else if (res.status >= 400) {
    return NextResponse.json('invalid')
  }

  const data = await res.json()
  return NextResponse.json(data)
}