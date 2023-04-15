'use client'

import { useCallback, useEffect, useState } from "react"

export default function Movies() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const getMovies = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/movie/all')
    const data = await res.json()

    setData(data)
    setLoading(false)
  }, [])
  useEffect(() => {
    getMovies()
  }, [getMovies])


  return (
    <div>{
      loading ? <>loading</> : <>ada</>
      }</div>
  )
}

const getMovies = async () => {
  const res = await fetch('/api/movie/all')
  const data = await res.json()

  return data
}