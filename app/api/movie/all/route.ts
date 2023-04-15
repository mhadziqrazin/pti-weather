import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_KEY}`
  )

  const data = await res.json()
  return NextResponse.json(data.results)
}