import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest,
  { params }: { params: { city: string, country: string } }) {

  const city = params.city // city that user input
  const country = params.country // country that user input

  const res = await fetch(
    `https://api.api-ninjas.com/v1/weather?city=${city}&country=${country}`,
    {
      headers: {
        'x-api-key': `${process.env.API_KEY}`
      }
    }
  )

  // the weather api has internal server error
  if (res.status >= 500) {
    return NextResponse.json('internal')
  }

  // user input an invalid city or country
  else if (res.status >= 400) {
    return NextResponse.json('invalid')
  }

  const data = await res.json()
  return NextResponse.json(data)
}