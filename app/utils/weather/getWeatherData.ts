import { SetStateAction } from "react"
import { toast } from "react-toastify"
import showWeatherData from "./showWeatherData"

// function to get weather data
const getWeatherData = async (
  e: React.FormEvent<HTMLFormElement>,
  setLoading: (value: SetStateAction<boolean>) => void,
  latLon: boolean,
  city: boolean,
  country: boolean,
  search: string,
  setData: (value: {
    temp: string,
    feels: string,
    humidity: string,
    wind: string
  }) => void
) => {
  setLoading(true)
  e.preventDefault()

  if (latLon) {
    try {
      if (search.split(" ").length !== 2) {
        throw new Error()
      }
    } catch {
      toast.error('Please provide a correct format :)')
      setLoading(false)
      return
    }

    const lat = search.split(' ')[0]
    const lon = search.split(' ')[1]

    const res = await fetch(`/api/latlon/${lat}/${lon}`)
    const data = await res.json()
    showWeatherData(data, setData)
  }

  else if (city) {
      const res = await fetch(`/api/city/${search}`)
      const data = await res.json()
      showWeatherData(data, setData)
    }

    else if (country) {
      try {
        if (search.split(', ').length !== 2) {
          throw new Error()
        }
      } catch {
        toast.error('Please provide a correct format :)')
        setLoading(false)
        return
      }

      const city = search.split(', ')[0]
      const country = search.split(', ')[1]

      const res = await fetch(`/api/country/${city}/${country}`)
      const data = await res.json()
      showWeatherData(data, setData)
    }
    setLoading(false)
}

export default getWeatherData